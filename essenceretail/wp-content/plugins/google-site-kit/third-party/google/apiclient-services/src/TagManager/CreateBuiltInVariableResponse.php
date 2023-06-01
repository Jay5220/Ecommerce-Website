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

class CreateBuiltInVariableResponse extends \Google\Site_Kit_Dependencies\Google\Collection
{
    protected $collection_key = 'builtInVariable';
    protected $builtInVariableType = \Google\Site_Kit_Dependencies\Google\Service\TagManager\BuiltInVariable::class;
    protected $builtInVariableDataType = 'array';
    /**
     * @param BuiltInVariable[]
     */
    public function setBuiltInVariable($builtInVariable)
    {
        $this->builtInVariable = $builtInVariable;
    }
    /**
     * @return BuiltInVariable[]
     */
    public function getBuiltInVariable()
    {
        return $this->builtInVariable;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\TagManager\CreateBuiltInVariableResponse::class, 'Google\\Site_Kit_Dependencies\\Google_Service_TagManager_CreateBuiltInVariableResponse');
