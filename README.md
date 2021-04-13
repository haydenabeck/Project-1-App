# Project-1-App










































<!-- API DOCUMENTATION BEGINS  -->

API KEY: bc18ac117906420fa9ac92103915f09d


./tmst

<!-- Shows time when response was generated in format:
yyyyMMdd HH:mm:ss (24-hour format, time local to Chicago) -->

./errCd

<!-- Numeric error code (see appendices) -->

./errNm

<!-- Textual error description/message (see appendices) -->

./eta

<!-- Container element (one per individual prediction) -->

././staId

<!-- Numeric GTFS parent station ID which this prediction is for (five digits in 4xxxx range) (matches “mapid” specified by requestor in query) -->

././stpId

<!-- Numeric GTFS unique stop ID within station which this prediction is for (five digits in 3xxxx range) -->

././staNm

<!-- Textual proper name of parent station -->

././stpDe

<!-- Textual description of platform for which this prediction applies -->

././rn

<!-- Run number of train being predicted for -->

././rt

<!-- Textual, abbreviated route name of train being predicted for (matches GTFS routes) -->

././destSt

<!-- GTFS unique stop ID where this train is expected to ultimately end its service run (experimental and supplemental only—see note below) -->

././destNm

<!-- Friendly destination description (see note below) -->

././trDr

<!-- Numeric train route direction code (see appendices) -->

././prdt

<!-- Date-time format stamp for when the prediction was generated: -->
<!-- yyyyMMdd HH:mm:ss (24-hour format, time local to Chicago) -->

././arrT

<!-- Date-time format stamp for when a train is expected to arrive/depart: -->
<!-- yyyyMMdd HH:mm:ss (24-hour format, time local to Chicago) -->

././isApp

<!-- Indicates that Train Tracker is now declaring “Approaching” or “Due” on site for this train -->

././isSch

<!-- Boolean flag to indicate whether this is a live prediction or based on schedule in lieu of live data -->

././isFlt

<!-- Boolean flag to indicate whether a potential fault has been detected (see note below) -->

././isDly

<!-- Boolean flag to indicate whether a train is considered “delayed” in Train Tracker -->

././flags	Train flags (not presently in use)
././lat	Latitude position of the train in decimal degrees
././lon	Longitude position of the train in decimal degrees
././heading	Heading, expressed in standard bearing degrees (0 = North, 90 = East, 180 = South, and 270 = West; range is 0 to 359, progressing clockwise)