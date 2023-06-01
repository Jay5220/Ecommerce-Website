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
namespace Google\Site_Kit_Dependencies\Google\Service\AnalyticsData;

class ConcatenateExpression extends \Google\Site_Kit_Dependencies\Google\Collection
{
    protected $collection_key = 'dimensionNames';
    /**
     * @var string
     */
    public $delimiter;
    /**
     * @var string[]
     */
    public $dimensionNames;
    /**
     * @param string
     */
    public function setDelimiter($delimiter)
    {
        $this->delimiter = $delimiter;
    }
    /**
     * @return string
     */
    public function getDelimiter()
    {
        return $this->delimiter;
    }
    /**
     * @param string[]
     */
    public function setDimensionNames($dimensionNames)
    {
        $this->dimensionNames = $dimensionNames;
    }
    /**
     * @return string[]
     */
    public function getDimensionNames()
    {
        return $this->dimensionNames;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsData\ConcatenateExpression::class, 'Google\\Site_Kit_Dependencies\\Google_Service_AnalyticsData_ConcatenateExpression');
