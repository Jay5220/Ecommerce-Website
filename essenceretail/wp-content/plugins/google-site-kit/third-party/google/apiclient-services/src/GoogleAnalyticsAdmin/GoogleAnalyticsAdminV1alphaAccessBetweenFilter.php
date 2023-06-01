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
namespace Google\Site_Kit_Dependencies\Google\Service\GoogleAnalyticsAdmin;

class GoogleAnalyticsAdminV1alphaAccessBetweenFilter extends \Google\Site_Kit_Dependencies\Google\Model
{
    protected $fromValueType = \Google\Site_Kit_Dependencies\Google\Service\GoogleAnalyticsAdmin\GoogleAnalyticsAdminV1alphaNumericValue::class;
    protected $fromValueDataType = '';
    protected $toValueType = \Google\Site_Kit_Dependencies\Google\Service\GoogleAnalyticsAdmin\GoogleAnalyticsAdminV1alphaNumericValue::class;
    protected $toValueDataType = '';
    /**
     * @param GoogleAnalyticsAdminV1alphaNumericValue
     */
    public function setFromValue(\Google\Site_Kit_Dependencies\Google\Service\GoogleAnalyticsAdmin\GoogleAnalyticsAdminV1alphaNumericValue $fromValue)
    {
        $this->fromValue = $fromValue;
    }
    /**
     * @return GoogleAnalyticsAdminV1alphaNumericValue
     */
    public function getFromValue()
    {
        return $this->fromValue;
    }
    /**
     * @param GoogleAnalyticsAdminV1alphaNumericValue
     */
    public function setToValue(\Google\Site_Kit_Dependencies\Google\Service\GoogleAnalyticsAdmin\GoogleAnalyticsAdminV1alphaNumericValue $toValue)
    {
        $this->toValue = $toValue;
    }
    /**
     * @return GoogleAnalyticsAdminV1alphaNumericValue
     */
    public function getToValue()
    {
        return $this->toValue;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\GoogleAnalyticsAdmin\GoogleAnalyticsAdminV1alphaAccessBetweenFilter::class, 'Google\\Site_Kit_Dependencies\\Google_Service_GoogleAnalyticsAdmin_GoogleAnalyticsAdminV1alphaAccessBetweenFilter');
