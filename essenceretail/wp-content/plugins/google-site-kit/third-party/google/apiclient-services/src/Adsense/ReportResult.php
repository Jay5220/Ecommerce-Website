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

class ReportResult extends \Google\Site_Kit_Dependencies\Google\Collection
{
    protected $collection_key = 'warnings';
    protected $averagesType = \Google\Site_Kit_Dependencies\Google\Service\Adsense\Row::class;
    protected $averagesDataType = '';
    protected $endDateType = \Google\Site_Kit_Dependencies\Google\Service\Adsense\Date::class;
    protected $endDateDataType = '';
    protected $headersType = \Google\Site_Kit_Dependencies\Google\Service\Adsense\Header::class;
    protected $headersDataType = 'array';
    protected $rowsType = \Google\Site_Kit_Dependencies\Google\Service\Adsense\Row::class;
    protected $rowsDataType = 'array';
    protected $startDateType = \Google\Site_Kit_Dependencies\Google\Service\Adsense\Date::class;
    protected $startDateDataType = '';
    /**
     * @var string
     */
    public $totalMatchedRows;
    protected $totalsType = \Google\Site_Kit_Dependencies\Google\Service\Adsense\Row::class;
    protected $totalsDataType = '';
    /**
     * @var string[]
     */
    public $warnings;
    /**
     * @param Row
     */
    public function setAverages(\Google\Site_Kit_Dependencies\Google\Service\Adsense\Row $averages)
    {
        $this->averages = $averages;
    }
    /**
     * @return Row
     */
    public function getAverages()
    {
        return $this->averages;
    }
    /**
     * @param Date
     */
    public function setEndDate(\Google\Site_Kit_Dependencies\Google\Service\Adsense\Date $endDate)
    {
        $this->endDate = $endDate;
    }
    /**
     * @return Date
     */
    public function getEndDate()
    {
        return $this->endDate;
    }
    /**
     * @param Header[]
     */
    public function setHeaders($headers)
    {
        $this->headers = $headers;
    }
    /**
     * @return Header[]
     */
    public function getHeaders()
    {
        return $this->headers;
    }
    /**
     * @param Row[]
     */
    public function setRows($rows)
    {
        $this->rows = $rows;
    }
    /**
     * @return Row[]
     */
    public function getRows()
    {
        return $this->rows;
    }
    /**
     * @param Date
     */
    public function setStartDate(\Google\Site_Kit_Dependencies\Google\Service\Adsense\Date $startDate)
    {
        $this->startDate = $startDate;
    }
    /**
     * @return Date
     */
    public function getStartDate()
    {
        return $this->startDate;
    }
    /**
     * @param string
     */
    public function setTotalMatchedRows($totalMatchedRows)
    {
        $this->totalMatchedRows = $totalMatchedRows;
    }
    /**
     * @return string
     */
    public function getTotalMatchedRows()
    {
        return $this->totalMatchedRows;
    }
    /**
     * @param Row
     */
    public function setTotals(\Google\Site_Kit_Dependencies\Google\Service\Adsense\Row $totals)
    {
        $this->totals = $totals;
    }
    /**
     * @return Row
     */
    public function getTotals()
    {
        return $this->totals;
    }
    /**
     * @param string[]
     */
    public function setWarnings($warnings)
    {
        $this->warnings = $warnings;
    }
    /**
     * @return string[]
     */
    public function getWarnings()
    {
        return $this->warnings;
    }
}
// Adding a class alias for backwards compatibility with the previous class name.
\class_alias(\Google\Site_Kit_Dependencies\Google\Service\Adsense\ReportResult::class, 'Google\\Site_Kit_Dependencies\\Google_Service_Adsense_ReportResult');
