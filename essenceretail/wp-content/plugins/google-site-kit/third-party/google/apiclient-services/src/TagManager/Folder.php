<?php

/*
 * Copyright 2014 Google Inc.
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
namespace Google\Site_Kit_Dependencies\Google\Service\TagManager;

class Folder extends \Google\Site_Kit_Dependencies\Google\Model
{
    /**
     * @var string
     */
    public $accountId;
    /**
     * @var string
     */
    public $containerId;
    /**
     * @var string
     */
    public $fingerprint;
    /**
     * @var string
     */
    public $folderId;
    /**
     * @var string
     */
    public $name;
    /**
     * @var string
     */
    public $notes;
    /**
     * @var string
     */
    public $path;
    /**
     * @var string
     */
    public $tagManagerUrl;
    /**
     * @var string
     */
    public $workspaceId;
    /**
     * @param string
     */
    public function setAccountId($accountId)
    {
        $this->accountId = $accountId;
    }
    /**
     * @return string
     */
    public function getAccountId()
    {
        return $this->accountId;
    }
    /**
     * @param string
     */
    public function setContainerId($containerId)
    {
        $this->containerId = $containerId;
    }
    /**
     * @return string
     */
    public function getContainerId()
    {
        return $this->containerId;
    }
    /**
     * @param string
     */
    public function setFingerprint($fingerprint)
    {
        $this->fingerprint = $fingerprint;
    }
    /**
     * @return string
     */
    public function getFingerprint()
    {
        return $this->fingerprint;
    }
    /**
     * @param string
     */
    public function setFolderId($folderId)
    {
        $this->folderId = $folderId;
    }
    /**
     * @return string
     */
    public function getFolderId()
    {
        return $this->folderId;
    }
    /**
     * @param string
     */
    public function setName($name)
    {
        $this->name = $name;
    }
    /**
     * @return string
     */
    public function getName()
    {
        return $this->name;
    }
    /**
     * @param string
     */
    public function setNotes($notes)
    {
        $this->notes = $notes;
    }
    /**
     * @return string
     */
    public function getNotes()
    {
        return $this->notes;
    }
    /**
     * @param string
     */
    public function setPath($path)
    {
        $this->path = $path;
    }
    /**
     * @return string
     */
    public function getPath()
    {
        return $this->path;
    }
    /**
     * @param string
     */
    public function setTagManagerUrl($tagManagerUrl)
    {
        $this->tagManagerUrl = $tagManagerUrl;
    }
    /**
     * @return string
     */
    public function getTagManagerUrl()
    {
        return $this->tagManagerUrl;
    }
    /**
     * @param string
     */
    public function setWorkspaceId($workspaceId)
    {
        $this->workspaceId = $workspaceId;
    }
    /**
     * @return string
     */
    public function getWorkspaceId()
    {
        return $this->workspaceId;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\TagManager\Folder::class, 'Google\\Site_Kit_Dependencies\\Google_Service_TagManager_Folder');
