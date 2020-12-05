AmCharts.makeChart("chartdiv",
            {
                "type": "serial",
                "categoryField": "date",
                "dataDateFormat": "YYYY-MM-DD",
                "theme": "light",
                "categoryAxis": {
                    "parseDates": true,
                    "dashLength": 1,
                    "fillAlpha": 0.11,
                    "gridAlpha": 0.11,
                    "minorGridAlpha": 0.09
                },
                "chartCursor": {
                    "enabled": true
                },
                "chartScrollbar": {
                    "enabled": true
                },
                "trendLines": [],
                "graphs": [
                    {
                        "balloonColor": "undefined",
                        "fillAlphas": 0.7,
                        "fillColors": "#4270FF",
                        "id": "AmGraph-1",
                        "lineAlpha": 0,
                        "title": "Car",
                        "valueField": "Car"
                    },
                    {
                        "fillAlphas": 0.7,
                        "fillColors": "#A5BEEF",
                        "id": "AmGraph-2",
                        "lineAlpha": 0,
                        "title": "Motorcycle",
                        "valueField": "Motorcycle"
                    }
                ],
                "guides": [],
                "valueAxes": [
                    {
                        "id": "ValueAxis-2",
                        "dashLength": 1,
                        "fillAlpha": 0.11,
                        "gridAlpha": 0.13
                    }
                ],
                "allLabels": [],
                "balloon": {},
                "legend": {
                    "enabled": true
                },
                "titles": [
                    {
                        "id": "Title-1",
                        "size": 15,
                        "text": "Summary"
                    }
                ],
                "dataProvider": [
                    {
                        "date": "2020-08-01",
                        "Car": "200",
                        "Motorcycle": "320"
                    },
                    {
                        "date": "2020-08-16",
                        "Car": "220",
                        "Motorcycle": "310"
                    },
                    {
                        "date": "2020-09-01",
                        "Car": "290",
                        "Motorcycle": "400"
                    },
                    {
                        "date": "2020-09-16",
                        "Car": "250",
                        "Motorcycle": "375"
                    },
                    {
                        "date": "2020-10-01",
                        "Car": "260",
                        "Motorcycle": "360"
                    },
                    {
                        "date": "2020-10-16",
                        "Car": "240",
                        "Motorcycle": "370"
                    },
                    {
                        "date": "2020-11-01",
                        "Car": "230",
                        "Motorcycle": "390"
                    }
                ]
            }
        );