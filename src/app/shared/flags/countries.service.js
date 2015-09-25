(function() {
    'use strict';

    angular
        .module('shared.flags')
        .service('CountriesService', CountriesService);

        function CountriesService() {
            var countries = [{'name':'Afghanistan','alpha2Code':'AF'},{'name':'Åland Islands','alpha2Code':'AX'},{'name':'Albania','alpha2Code':'AL'},{'name':'Algeria','alpha2Code':'DZ'},{'name':'American Samoa','alpha2Code':'AS'},{'name':'Andorra','alpha2Code':'AD'},{'name':'Angola','alpha2Code':'AO'},{'name':'Anguilla','alpha2Code':'AI'},{'name':'Antigua and Barbuda','alpha2Code':'AG'},{'name':'Argentina','alpha2Code':'AR'},{'name':'Armenia','alpha2Code':'AM'},{'name':'Aruba','alpha2Code':'AW'},{'name':'Australia','alpha2Code':'AU'},{'name':'Austria','alpha2Code':'AT'},{'name':'Azerbaijan','alpha2Code':'AZ'},{'name':'The Bahamas','alpha2Code':'BS'},{'name':'Bahrain','alpha2Code':'BH'},{'name':'Bangladesh','alpha2Code':'BD'},{'name':'Barbados','alpha2Code':'BB'},{'name':'Belarus','alpha2Code':'BY'},{'name':'Belgium','alpha2Code':'BE'},{'name':'Belize','alpha2Code':'BZ'},{'name':'Benin','alpha2Code':'BJ'},{'name':'Bermuda','alpha2Code':'BM'},{'name':'Bhutan','alpha2Code':'BT'},{'name':'Bolivia','alpha2Code':'BO'},{'name':'Bonaire','alpha2Code':'BQ'},{'name':'Bosnia and Herzegovina','alpha2Code':'BA'},{'name':'Bosnia','alpha2Code':'BA'},{'name':'Botswana','alpha2Code':'BW'},{'name':'Bouvet Island','alpha2Code':'BV'},{'name':'Brazil','alpha2Code':'BR'},{'name':'British Indian Ocean Territory','alpha2Code':'IO'},{'name':'United States Minor Outlying Islands','alpha2Code':'UM'},{'name':'British Virgin Islands','alpha2Code':'VG'},{'name':'Brunei','alpha2Code':'BN'},{'name':'Bulgaria','alpha2Code':'BG'},{'name':'Burkina Faso','alpha2Code':'BF'},{'name':'Burundi','alpha2Code':'BI'},{'name':'Cambodia','alpha2Code':'KH'},{'name':'Cameroon','alpha2Code':'CM'},{'name':'Canada','alpha2Code':'CA'},{'name':'Cape Verde','alpha2Code':'CV'},{'name':'Cayman Islands','alpha2Code':'KY'},{'name':'Central African Republic','alpha2Code':'CF'},{'name':'Chad','alpha2Code':'TD'},{'name':'Chile','alpha2Code':'CL'},{'name':'China','alpha2Code':'CN'},{'name':'Christmas Island','alpha2Code':'CX'},{'name':'Cocos (Keeling) Islands','alpha2Code':'CC'},{'name':'Colombia','alpha2Code':'CO'},{'name':'Comoros','alpha2Code':'KM'},{'name':'Republic of the Congo','alpha2Code':'CG'},{'name':'Democratic Republic of the Congo','alpha2Code':'CD'},{'name':'Cook Islands','alpha2Code':'CK'},{'name':'Costa Rica','alpha2Code':'CR'},{'name':'Croatia','alpha2Code':'HR'},{'name':'Cuba','alpha2Code':'CU'},{'name':'Curaçao','alpha2Code':'CW'},{'name':'Cyprus','alpha2Code':'CY'},{'name':'Czech Republic','alpha2Code':'CZ'},{'name':'Denmark','alpha2Code':'DK'},{'name':'Djibouti','alpha2Code':'DJ'},{'name':'Dominica','alpha2Code':'DM'},{'name':'Dominican Republic','alpha2Code':'DO'},{'name':'Ecuador','alpha2Code':'EC'},{'name':'Egypt','alpha2Code':'EG'},{'name':'El Salvador','alpha2Code':'SV'},{'name':'Equatorial Guinea','alpha2Code':'GQ'},{'name':'Eritrea','alpha2Code':'ER'},{'name':'Estonia','alpha2Code':'EE'},{'name':'Ethiopia','alpha2Code':'ET'},{'name':'Falkland Islands','alpha2Code':'FK'},{'name':'Faroe Islands','alpha2Code':'FO'},{'name':'Fiji','alpha2Code':'FJ'},{'name':'Finland','alpha2Code':'FI'},{'name':'France','alpha2Code':'FR'},{'name':'French Guiana','alpha2Code':'GF'},{'name':'French Polynesia','alpha2Code':'PF'},{'name':'French Southern and Antarctic Lands','alpha2Code':'TF'},{'name':'Gabon','alpha2Code':'GA'},{'name':'The Gambia','alpha2Code':'GM'},{'name':'Georgia','alpha2Code':'GE'},{'name':'Germany','alpha2Code':'DE'},{'name':'Ghana','alpha2Code':'GH'},{'name':'Gibraltar','alpha2Code':'GI'},{'name':'Greece','alpha2Code':'GR'},{'name':'Greenland','alpha2Code':'GL'},{'name':'Grenada','alpha2Code':'GD'},{'name':'Guadeloupe','alpha2Code':'GP'},{'name':'Guam','alpha2Code':'GU'},{'name':'Guatemala','alpha2Code':'GT'},{'name':'Guernsey','alpha2Code':'GG'},{'name':'Guinea','alpha2Code':'GN'},{'name':'Guinea-Bissau','alpha2Code':'GW'},{'name':'Guyana','alpha2Code':'GY'},{'name':'Haiti','alpha2Code':'HT'},{'name':'Heard Island and McDonald Islands','alpha2Code':'HM'},{'name':'Honduras','alpha2Code':'HN'},{'name':'Hong Kong','alpha2Code':'HK'},{'name':'Hungary','alpha2Code':'HU'},{'name':'Iceland','alpha2Code':'IS'},{'name':'India','alpha2Code':'IN'},{'name':'Indonesia','alpha2Code':'ID'},{'name':'Ivory Coast','alpha2Code':'CI'},{'name':'Iran','alpha2Code':'IR'},{'name':'Iraq','alpha2Code':'IQ'},{'name':'Republic of Ireland','alpha2Code':'IE'},{'name':'Isle of Man','alpha2Code':'IM'},{'name':'Israel','alpha2Code':'IL'},{'name':'Italy','alpha2Code':'IT'},{'name':'Jamaica','alpha2Code':'JM'},{'name':'Japan','alpha2Code':'JP'},{'name':'Jersey','alpha2Code':'JE'},{'name':'Jordan','alpha2Code':'JO'},{'name':'Kazakhstan','alpha2Code':'KZ'},{'name':'Kenya','alpha2Code':'KE'},{'name':'Kiribati','alpha2Code':'KI'},{'name':'Kuwait','alpha2Code':'KW'},{'name':'Kyrgyzstan','alpha2Code':'KG'},{'name':'Laos','alpha2Code':'LA'},{'name':'Latvia','alpha2Code':'LV'},{'name':'Lebanon','alpha2Code':'LB'},{'name':'Lesotho','alpha2Code':'LS'},{'name':'Liberia','alpha2Code':'LR'},{'name':'Libya','alpha2Code':'LY'},{'name':'Liechtenstein','alpha2Code':'LI'},{'name':'Lithuania','alpha2Code':'LT'},{'name':'Luxembourg','alpha2Code':'LU'},{'name':'Macau','alpha2Code':'MO'},{'name':'Republic of Macedonia','alpha2Code':'MK'},{'name':'Madagascar','alpha2Code':'MG'},{'name':'Malawi','alpha2Code':'MW'},{'name':'Malaysia','alpha2Code':'MY'},{'name':'Maldives','alpha2Code':'MV'},{'name':'Mali','alpha2Code':'ML'},{'name':'Malta','alpha2Code':'MT'},{'name':'Marshall Islands','alpha2Code':'MH'},{'name':'Martinique','alpha2Code':'MQ'},{'name':'Mauritania','alpha2Code':'MR'},{'name':'Mauritius','alpha2Code':'MU'},{'name':'Mayotte','alpha2Code':'YT'},{'name':'Mexico','alpha2Code':'MX'},{'name':'Federated States of Micronesia','alpha2Code':'FM'},{'name':'Moldova','alpha2Code':'MD'},{'name':'Monaco','alpha2Code':'MC'},{'name':'Mongolia','alpha2Code':'MN'},{'name':'Montenegro','alpha2Code':'ME'},{'name':'Montserrat','alpha2Code':'MS'},{'name':'Morocco','alpha2Code':'MA'},{'name':'Mozambique','alpha2Code':'MZ'},{'name':'Myanmar','alpha2Code':'MM'},{'name':'Namibia','alpha2Code':'NA'},{'name':'Nauru','alpha2Code':'NR'},{'name':'Nepal','alpha2Code':'NP'},{'name':'Netherlands','alpha2Code':'NL'},{'name':'New Caledonia','alpha2Code':'NC'},{'name':'New Zealand','alpha2Code':'NZ'},{'name':'Nicaragua','alpha2Code':'NI'},{'name':'Niger','alpha2Code':'NE'},{'name':'Nigeria','alpha2Code':'NG'},{'name':'Niue','alpha2Code':'NU'},{'name':'Norfolk Island','alpha2Code':'NF'},{'name':'North Korea','alpha2Code':'KP'},{'name':'Northern Mariana Islands','alpha2Code':'MP'},{'name':'Norway','alpha2Code':'NO'},{'name':'Oman','alpha2Code':'OM'},{'name':'Pakistan','alpha2Code':'PK'},{'name':'Palau','alpha2Code':'PW'},{'name':'Palestine','alpha2Code':'PS'},{'name':'Panama','alpha2Code':'PA'},{'name':'Papua New Guinea','alpha2Code':'PG'},{'name':'Paraguay','alpha2Code':'PY'},{'name':'Peru','alpha2Code':'PE'},{'name':'Philippines','alpha2Code':'PH'},{'name':'Pitcairn Islands','alpha2Code':'PN'},{'name':'Poland','alpha2Code':'PL'},{'name':'Portugal','alpha2Code':'PT'},{'name':'Puerto Rico','alpha2Code':'PR'},{'name':'Qatar','alpha2Code':'QA'},{'name':'Republic of Kosovo','alpha2Code':'XK'},{'name':'Réunion','alpha2Code':'RE'},{'name':'Romania','alpha2Code':'RO'},{'name':'Russia','alpha2Code':'RU'},{'name':'Rwanda','alpha2Code':'RW'},{'name':'Saint Barthélemy','alpha2Code':'BL'},{'name':'Saint Helena','alpha2Code':'SH'},{'name':'Saint Kitts and Nevis','alpha2Code':'KN'},{'name':'Saint Lucia','alpha2Code':'LC'},{'name':'Saint Martin','alpha2Code':'MF'},{'name':'Saint Pierre and Miquelon','alpha2Code':'PM'},{'name':'Saint Vincent and the Grenadines','alpha2Code':'VC'},{'name':'Samoa','alpha2Code':'WS'},{'name':'San Marino','alpha2Code':'SM'},{'name':'São Tomé and Príncipe','alpha2Code':'ST'},{'name':'Saudi Arabia','alpha2Code':'SA'},{'name':'Senegal','alpha2Code':'SN'},{'name':'Serbia','alpha2Code':'RS'},{'name':'Seychelles','alpha2Code':'SC'},{'name':'Sierra Leone','alpha2Code':'SL'},{'name':'Singapore','alpha2Code':'SG'},{'name':'Sint Maarten','alpha2Code':'SX'},{'name':'Slovakia','alpha2Code':'SK'},{'name':'Slovenia','alpha2Code':'SI'},{'name':'Solomon Islands','alpha2Code':'SB'},{'name':'Somalia','alpha2Code':'SO'},{'name':'South Africa','alpha2Code':'ZA'},{'name':'South Georgia','alpha2Code':'GS'},{'name':'South Korea','alpha2Code':'KR'},{'name':'South Sudan','alpha2Code':'SS'},{'name':'Spain','alpha2Code':'ES'},{'name':'Sri Lanka','alpha2Code':'LK'},{'name':'Sudan','alpha2Code':'SD'},{'name':'Suriname','alpha2Code':'SR'},{'name':'Svalbard and Jan Mayen','alpha2Code':'SJ'},{'name':'Swaziland','alpha2Code':'SZ'},{'name':'Sweden','alpha2Code':'SE'},{'name':'Switzerland','alpha2Code':'CH'},{'name':'Syria','alpha2Code':'SY'},{'name':'Taiwan','alpha2Code':'TW'},{'name':'Tajikistan','alpha2Code':'TJ'},{'name':'Tanzania','alpha2Code':'TZ'},{'name':'Thailand','alpha2Code':'TH'},{'name':'East Timor','alpha2Code':'TL'},{'name':'Togo','alpha2Code':'TG'},{'name':'Tokelau','alpha2Code':'TK'},{'name':'Tonga','alpha2Code':'TO'},{'name':'Trinidad and Tobago','alpha2Code':'TT'},{'name':'Tunisia','alpha2Code':'TN'},{'name':'Turkey','alpha2Code':'TR'},{'name':'Turkmenistan','alpha2Code':'TM'},{'name':'Turks and Caicos Islands','alpha2Code':'TC'},{'name':'Tuvalu','alpha2Code':'TV'},{'name':'Uganda','alpha2Code':'UG'},{'name':'Ukraine','alpha2Code':'UA'},{'name':'United Arab Emirates','alpha2Code':'AE'},{'name':'United Kingdom','alpha2Code':'GB'},{'name':'United States','alpha2Code':'US'},{'name':'Uruguay','alpha2Code':'UY'},{'name':'Uzbekistan','alpha2Code':'UZ'},{'name':'Vanuatu','alpha2Code':'VU'},{'name':'Venezuela','alpha2Code':'VE'},{'name':'Vietnam','alpha2Code':'VN'},{'name':'Wallis and Futuna','alpha2Code':'WF'},{'name':'Western Sahara','alpha2Code':'EH'},{'name':'Yemen','alpha2Code':'YE'},{'name':'Zambia','alpha2Code':'ZM'},{'name':'Zimbabwe','alpha2Code':'ZW'}];
            var alpha2CodesHash = setAlpha2CodesHash();

            var service = {
                getAlpha2CodesHash: getAlpha2CodesHash
            };

            return service;

            /////////////////

            function getAlpha2CodesHash() {
                return alpha2CodesHash;
            }

            function setAlpha2CodesHash() {
                var codes = {};
                countries.forEach(function(country) {
                    codes[country.name.toLowerCase()] = country.alpha2Code.toLowerCase();
                });
                return codes;
            }
        }

})();
