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
namespace Google\Site_Kit_Dependencies\Google\Service\Adsense;

class Site extends \Google\Site_Kit_Dependencies\Google\Model
{
    /**
     * @var bool
     */
    public $autoAdsEnabled;
    /**
     * @var string
     */
    public $domain;
    /**
     * @var string
     */
    public $name;
    /**
     * @var string
     */
    public $reportingDimensionId;
    /**
     * @var string
     */
    public $state;
    /**
     * @param bool
     */
    public function setAutoAdsEnabled($autoAdsEnabled)
    {
        $this->autoAdsEnabled = $autoAdsEnabled;
    }
    /**
     * @return bool
     */
    public function getAutoAdsEnabled()
    {
        return $this->autoAdsEnabled;
    }
    /**
     * @param string
     */
    public function setDomain($domain)
    {
        $this->domain = $domain;
    }
    /**
     * @return string
     */
    public function getDomain()
    {
        return $this->domain;
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
    public function setReportingDimensionId($reportingDimensionId)
    {
        $this->reportingDimensionId = $reportingDimensionId;
    }
    /**
     * @return string
     */
    public function getReportingDimensionId()
    {
        return $this->reportingDimensionId;
    }
    /**
     * @param string
     */
    public function setState($state)
    {
        $this->state = $state;
    }
    /**
     * @return string
     */
    public function getState()
    {
        return $this->state;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\Adsense\Site::class, 'Google\\Site_Kit_Dependencies\\Google_Service_Adsense_Site');
