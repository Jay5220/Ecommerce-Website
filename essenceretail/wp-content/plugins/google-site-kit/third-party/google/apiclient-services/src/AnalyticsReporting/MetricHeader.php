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
namespace Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting;

class MetricHeader extends \Google\Site_Kit_Dependencies\Google\Collection
{
    protected $collection_key = 'pivotHeaders';
    protected $metricHeaderEntriesType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\MetricHeaderEntry::class;
    protected $metricHeaderEntriesDataType = 'array';
    protected $pivotHeadersType = \Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\PivotHeader::class;
    protected $pivotHeadersDataType = 'array';
    /**
     * @param MetricHeaderEntry[]
     */
    public function setMetricHeaderEntries($metricHeaderEntries)
    {
        $this->metricHeaderEntries = $metricHeaderEntries;
    }
    /**
     * @return MetricHeaderEntry[]
     */
    public function getMetricHeaderEntries()
    {
        return $this->metricHeaderEntries;
    }
    /**
     * @param PivotHeader[]
     */
    public function setPivotHeaders($pivotHeaders)
    {
        $this->pivotHeaders = $pivotHeaders;
    }
    /**
     * @return PivotHeader[]
     */
    public function getPivotHeaders()
    {
        return $this->pivotHeaders;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\AnalyticsReporting\MetricHeader::class, 'Google\\Site_Kit_Dependencies\\Google_Service_AnalyticsReporting_MetricHeader');
