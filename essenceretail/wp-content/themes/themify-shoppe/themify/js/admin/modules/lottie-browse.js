let TF_LottieBrowse;
((doc, Themify,und)=> {
    'use strict';
    let observer,
        jsonData,
        holders=new WeakMap(),
        timer;
    const initObserver=async root=>{
        if(!observer){
            observer=new IntersectionObserver((entries, _self)=>{
                for (let i = 0,len=entries.length;i<len;++i) {
                    let item=entries[i].target,
                        anim=holders.get(item);
                    if(anim!=1){
                        if (entries[i].intersectionRatio>=.29) {
                            if(anim && anim.player){
                                if(anim.player.isPaused){
                                    anim.player.show();
                                    anim.player.play();
                                }
                            }else{
                                let obj=new TF_Lottie(item.tfClass('lottie')[0],{
                                    type:'svg',
                                    actions:[{state:'none',tr:'autoplay',path:item.dataset.id}]
                                });
                                holders.set(item,1);
                                obj.run().then(()=>{
                                    item.tfClass('tf_loader')[0].remove();
                                    if(obj.player) {
                                        holders.set(item,obj);
                                        obj.player.loop = true;
                                        obj.player.play();
                                    }else{
                                        holders.delete(item,obj);
                                        obj.destroy(true);
                                    }
                                });
                            }
                        }
                        else if(anim && anim.player && !anim.player.isPaused){
                            anim.player.pause();
                            anim.player.hide();
                        }
                    }
                }

            }, {
                threshold:.3,
                root:root
            });
        }
    };
    TF_LottieBrowse={
        el:null,
        input:null,
        run(input){
            this.input=input;
            return this.show(input.value);
        },
        async render(){
            if(this.el===null){
                const _CLICK_=Themify.click,
                    close=doc.createElement('button'),
                    search=doc.createElement('input'),
                    clearSearch=doc.createElement('button'),
                    menuWrap=doc.createElement('div'),
                    catWrap=doc.createElement('div'),
                    menuIcon=doc.createElement('a'),
                    menu=doc.createElement('ul'),
                    selectedCat=doc.createElement('span'),
                    container=doc.createElement('div'),
                    pagination=doc.createElement('div'),
                    categoryFr=doc.createDocumentFragment(),
                    prms=[
                        this.getJson(),
                        Themify.loadJs('https://cdnjs.cloudflare.com/ajax/libs/lottie-web/5.11.0/lottie.min.js',!!window.lottie,false),
                        Themify.loadJs('lottie',!!window.TF_Lottie)
                    ];
                this.el=doc.createElement('div');
                this.el.className='lightbox tf_hide';

                catWrap.className='cat_wrap flex';
                menuIcon.href='javascript:;';
                menuIcon.className='menu_icon flex tf_rel';
                menu.className='menu tf_box tf_hidden tf_opacity tf_scrollbar';
                selectedCat.className='selected_cat';
                selectedCat.textContent='All';

                //title.textContent=tfIconPicker.title;
                search.type='search';
                search.className='search tf_box';
                search.required=true;
                search.setAttribute('inputmode','search');
                search.setAttribute('pattern','.*\\S.*');

                close.className='tf_close';
                clearSearch.type=close.type='button';
                clearSearch.className='clear tf_close';

                menuWrap.className='menu_wrap flex tf_rel';
                container.className='container tf_scrollbar';
                pagination.className='pagination flex';

                let root=doc.tfId('tf_lottie_root');
                if(!root){
                    root=doc.createElement('div');
                    const overlay=doc.createElement('div');

                    root.id='tf_lottie_root';
                    root.style.display='none';

                    overlay.className='overlay tf_abs_t tf_opacity tf_w tf_h tf_opacity tf_hide';

                    overlay.tfOn(_CLICK_,e=>{
                        e.stopPropagation();
                        this.close();
                    },{passive:true});

                    root.attachShadow({
                        mode:'open'
                    }).append( this.el,overlay);

                    doc.body.appendChild(root);
                    prms.push(Themify.loadCss(Themify.url+'css/base.min','tf_base-css',false,this.el));
                    prms.push(Themify.loadCss(Themify.url+'css/admin/lottie-browse',null,false,this.el));
                }else{
                    root.shadowRoot.appendChild(this.el);
                }
                initObserver(container);
                await Promise.all(prms);
                const cats=Object.keys(jsonData);
                cats.unshift('All');
                for(let i=0;i<cats.length;++i){
                    let li=doc.createElement('li');
                    if(i===0){
                        li.dataset.all=1;
                        li.classList.add('current');
                    }
                    li.textContent=cats[i];
                    categoryFr.appendChild(li);
                }
                menu.appendChild(categoryFr);
                menuIcon.appendChild(selectedCat);
                catWrap.append(menuIcon,menu);
                menuWrap.append(catWrap,search);
                this.el.append(menuWrap,container,pagination,close);

                this.renderItems();
                root.style.display='';

                close.tfOn(_CLICK_,e=>{
                    e.stopPropagation();
                    this.close();
                },{passive:true});

                pagination.tfOn(_CLICK_,e=>{
                    e.stopPropagation();
                    let p=e.target.textContent;
                    if(p && p[0]!=='.'){
                        this.renderItems('',search.value,parseInt(p));
                    }
                },{passive:true});

                clearSearch.tfOn(_CLICK_,e=>{
                    e.stopPropagation();
                    this.clearSearch();
                },{passive:true});

                container.tfOn(_CLICK_,async e=>{
                    e.stopPropagation();
                    const item=e.target.closest('.item');
                    if(item){
                        this.input.value=item.dataset.id;
                        await this.close();
                        Themify.triggerEvent(this.input,'change');
                    }
                },{passive:true});
                menu.tfOn(_CLICK_, e=>{
                    e.stopPropagation();
                    const el=e.target,
                        _menu=e.currentTarget;
                    if(el.parentNode===_menu){
                        const current=_menu.tfClass('current')[0],
                            cat=el.textContent;
                        if(current!==el || search.value){
                            search.value='';
                            current.classList.remove('current');
                            el.classList.add('current');
                            this.el.tfClass('selected_cat')[0].textContent=cat;
                            this.renderItems((el.dataset.all?'':cat));
                        }
                    }
                },{passive:true});
                let req,
                    timeout;
                search.tfOn('input',e=>{
                    e.stopPropagation();
                    if(req){
                        cancelAnimationFrame(req);
                    }
                    if(timeout){
                        clearTimeout(timeout);
                    }
                    timeout=setTimeout(()=>{
                        req=requestAnimationFrame(()=>{
                            req=null;
                            const cat=this.el.tfClass('current')[0];
                            this.renderItems((cat.dataset.all?'':cat.textContent),search.value.trim());
                        });
                    },100);
                },{passive:true});
            }
        },
        renderItems(catId,search,page) {
            if (!page) {
                page = 1;
            }
            const cores=navigator.hardwareConcurrency,
                limit=Themify.isTouch || (cores && cores<16)?32:(cores>=16?52:42),
                offset = (page - 1) * limit,
                container = this.el.tfClass('container')[0],
                pagination = this.el.tfClass('pagination')[0],
                fr = doc.createDocumentFragment(),
                added = new Set(),
                cats = catId?[catId]:Object.keys(jsonData);
            let items = [];
            if(search){
                search=search.toLowerCase();
            }
            for (let i = 0; i < cats.length; ++i) {
                for (let k in jsonData[cats[i]]) {
                    let name = jsonData[cats[i]][k];
                    if (!added.has(k) && (!search || name.toLowerCase().includes(search))) {
                        items.push({id: k, name: name});
                        added.add(k);
                    }
                }
            }
            added.clear();
            const foundItems = items.length;
            items = items.slice(offset,offset+ limit);
            for (let i = 0; i < items.length; ++i) {
                let item = doc.createElement('div'),
                    loader = doc.createElement('div'),
                    lottie = doc.createElement('div'),
                    title = doc.createElement('div');
                loader.className = 'tf_loader';
                lottie.className = 'lottie flex tf_w tf_h';
                title.textContent = items[i].name;
                title.className = 'title tf_overflow tf_box tf_w tf_h tf_mw';
                item.dataset.id = items[i].id;
                item.className = 'item';
                lottie.appendChild(loader);
                item.append(lottie, title);
                fr.appendChild(item);
                observer.observe(item);
            }
            for(let childs=container.children,i=childs.length-1;i>-1;--i){
                let lottie=holders.get(childs[i]);
                if(lottie){
                    holders.delete(lottie);
                    if(lottie!=1){
                        lottie.destroy(true);
                    }
                }
                observer.unobserve(childs[i]);
                childs[i].remove();
            }
            container.appendChild(fr);
            pagination.replaceChildren(this.getPagination(foundItems,page,limit));
        },
        getPagination(total,page,limit){
            const paginateFr=doc.createDocumentFragment();
            if(total>limit){
                const lastPage = Math.ceil(total / limit),
                    pageLink=number=>{
                        const p=doc.createElement('span');
                        p.textContent=number;
                        if(number===page){
                            p.className='selected_page';
                        }
                        return p;
                    },
                    pageGap= x=> {
                        let res=' ... ';
                        if (x===0) {
                            res= '';
                        }
                        else if (x===1){
                            res= ' ';
                        }
                        else if (x<=10){
                            res=' . ';
                        }
                        else if (x<=100){
                            res=' .. ';
                        }
                        return doc.createTextNode(res);
                    },
                    LINKS_PER_STEP = 3;

                let lastp1 = 1,
                    lastp2 = page,
                    p1 = 1,
                    p2 = page,
                    c1 = LINKS_PER_STEP+1,
                    c2 = LINKS_PER_STEP+1,
                    s1 = doc.createDocumentFragment(),
                    s2 = doc.createDocumentFragment(),
                    step = 1;

                while (true){
                    if (c1>=c2){
                        s1.append(pageGap(p1-lastp1) , pageLink(p1,page));
                        lastp1 = p1;
                        p1 += step;
                        --c1;
                    }
                    else{
                        s2.prepend(pageLink(p2,page),pageGap(lastp2-p2));
                        lastp2 = p2;
                        p2 -= step;
                        --c2;
                    }
                    if (c2===0){
                        step *= 10;
                        p1 += step-1;        // Round UP to nearest multiple of step
                        p1 -= (p1 % step);
                        p2 -= (p2 % step);   // Round DOWN to nearest multiple of step
                        c1 = c2=LINKS_PER_STEP;
                    }
                    if (p1>p2){
                        paginateFr.append(s1,pageGap(lastp2-lastp1),s2);
                        if (lastp2>page||page>=lastPage){
                            break;
                        }
                        lastp1 = page;
                        lastp2 = p2=lastPage;
                        p1 = page+1;
                        c1 = LINKS_PER_STEP;
                        c2 = LINKS_PER_STEP+1;
                        step = 1;
                    }
                }
            }
            return paginateFr;
        },
        destroy(){
            const items=this.el.tfClass('item');
            for(let i=items.length-1;i>-1;--i){
                let anim=holders.get(items[i]);
                if(anim){
                    if(anim!=1) {
                        anim.destroy(true);
                    }
                    holders.delete(anim);
                }
            }
            observer.disconnect();
            this.el.remove();
            holders=new WeakMap();
            if(Themify.isTouch){
                jsonData=null;
            }
            else{
                timer=setTimeout(()=>{
                    jsonData=timer=null;
                },60000);
            }
            observer=this.el=null;
        },
        show(selected){
            return new Promise(async resolve=>{
                if(!this.el){
                    await this.render(selected);
                }
                if(timer){
                    clearTimeout(timer);
                    timer=null;
                }
                const overlay=this.el.getRootNode().querySelector('.overlay');
                overlay.classList.remove('tf_hide');
                this.el.classList.remove('tf_hide');
                requestAnimationFrame(()=>{
                    this.el.tfOn('transitionend',()=>{
                        resolve();
                    },{passive:true,once:true})
                        .style.top=0;
                    overlay.classList.remove('tf_opacity');
                });
            });
        },
        close(){
            return new Promise(resolve=>{
                const overlay=this.el.getRootNode().querySelector('.overlay');
                this.el.tfOn('transitionend',e=>{
                    e.currentTarget.classList.add('tf_hide');
                    this.destroy();
                    resolve();
                },{passive:true,once:true});
                overlay.tfOn('transitionend',function(){
                    this.classList.add('tf_hide');
                    this.classList.remove('tf_opacity');
                },{passive:true,once:true})
                    .classList.add('tf_opacity');
                this.el.style.top='';
            });
        },
        async getJson(){
            if(!jsonData){
                jsonData=await Themify.fetch('', 'json', {
                    credentials: 'omit',
                    method: 'GET',
                    mode: 'cors',
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }, 'https://themify.org/public-api/lottie/index.json');
            }
        }
    };

})(window.top.document, Themify,undefined);