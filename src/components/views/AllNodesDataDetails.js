import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {useParams} from 'react-router';
import { Table } from 'antd';

const AllNodesDataDetails = () => {
  const [page] = React.useState(1);
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);
  const storeState = useSelector((state) => state);
  const {city} = useParams();
  useEffect(() => {
    const initFn = () => {
      let mainData;
      if (storeState.isDataInitialized) {
        mainData = storeState.metadata;
        if (city) {
          mainData = storeState.metadata.filter((el) => {
            return el.location.city === city;
          });
        }
        setData(mainData);
        
        setData((data) =>
          data.sort((a, b) => {
            if (a.location['city'] < b.location['city']) {
              return -1;
            }
            if (a.location['city'] > b.location['city']) {
              return 1;
            }
            return 0;
          })
          
        );
        setLoading(false);
      }
    };
    initFn();
  }, [storeState, city]);
  
const columns = [
  {
    title:"Sr. No.",
    key:"index",
    width:80,
    render:(value, item, index) => <span> {(page - 1) * 10 + index+1}</span>
  },
  {
    title: 'Moniker',
    dataIndex: 'moniker',
    key: 'moniker',
  },
  {
    title: 'Address',
    dataIndex: 'address',
    key: 'address',
    ellipsis: true,
  },
  {
    title: 'City',
    dataIndex: 'location',
    key: 'location1',
    render: (text) => <span>{text.city}</span>,
  },
  {
    title: 'Country',
    dataIndex: 'location',
    key: 'location2',
    sorter: (a, b) => {
      if (a.location.country.toLowerCase() > b.location.country.toLowerCase()) {
        return -1;
      } else if (a.location.country.toLowerCase() < b.location.country.toLowerCase()) {
        return 1;
      } else {
        return 0;
      }
    },
    filters: [
      { 
        text:"Aland Islands",
        value:"Aland Islands"
      },
      { 
        text:"Albania",
        value:"Albania"
      },
      { 
        text:"Algeria",
        value:"Algeria"
      },
      { 
        text:"American Samoa",
        value:"American Samoa"
      },
      { 
        text:"Andorra",
        value:"Andorra"
      },
      { 
        text:"Angola",
        value:"Angola"
      },
      { 
        text:"Anguilla",
        value:"Anguilla"
      },
      { 
        text:"Antarctica",
        value:"Antarctica"
      },
      { 
        text:"Antigua and Barbuda",
        value:"Antigua and Barbuda"
      },
      { 
        text:"Argentina",
        value:"Argentina"
      },
      { 
        text:"Armenia",
        value:"Armenia"
      },
      { 
        text:"Aruba",
        value:"Aruba"
      },
      { 
        text:"Australia",
        value:"Australia"
      },
      { 
        text:"Austria",
        value:"Austria"
      },
      { 
        text:"Azerbaijan",
        value:"Azerbaijan"
      },
      { 
        text:"Bahamas",
        value:"Bahamas"
      },
      { 
        text:"Bahrain",
        value:"Bahrain"
      },
      { 
        text:"Bangladesh",
        value:"Bangladesh"
      },
      { 
        text:"Barbados",
        value:"Barbados"
      },
      { 
        text:"Belarus",
        value:"Belarus"
      },
      { 
        text:"Belgium",
        value:"Belgium"
      },
      { 
        text:"Belize",
        value:"Belize"
      },
      { 
        text:"Benin",
        value:"Benin"
      },
      { 
        text:"Bermuda",
        value:"Bermuda"
      },
      { 
        text:"Bhutan",
        value:"Bhutan"
      },
      { 
        text:"Bolivia",
        value:"Bolivia"
      },
      { 
        text:"Bonaire, Saint Eustatius and Saba",
        value:"Bonaire, Saint Eustatius and Saba"
      },
      { 
        text:"Bosnia and Herzegovina",
        value:"Bosnia and Herzegovina"
      },
      { 
        text:"Botswana",
        value:"Botswana"
      },
      { 
        text:"Bouvet Island",
        value:"Bouvet Island"
      },
      { 
        text:"Brazil",
        value:"Brazil"
      },
      { 
        text:"British Indian Ocean Territory",
        value:"British Indian Ocean Territory"
      },
      { 
        text:"British Virgin Islands",
        value:"British Virgin Islands"
      },
      { 
        text:"Brunei",
        value:"Brunei"
      },
      { 
        text:"Bulgaria",
        value:"Bulgaria"
      },
      { 
        text:"Burkina Faso",
        value:"Burkina Faso"
      },
      { 
        text:"Burundi",
        value:"Burundi"
      },
      { 
        text:"Cambodia",
        value:"Cambodia"
      },
      { 
        text:"Cameroon",
        value:"Cameroon"
      },
      { 
        text:"Canada",
        value:"Canada"
      },
      { 
        text:"Cape Verde",
        value:"Cape Verde"
      },
      { 
        text:"Cayman Islands",
        value:"Cayman Islands"
      },
      { 
        text:"Central African Republic",
        value:"Central African Republic"
      },
      { 
        text:"Chad",
        value:"Chad"
      },
      { 
        text:"Chile",
        value:"Chile"
      },
      { 
        text:"China",
        value:"China"
      },
      { 
        text:"Christmas Island",
        value:"Christmas Island"
      },
      { 
        text:"Cocos Islands",
        value:"Cocos Islands"
      },
      { 
        text:"Colombia",
        value:"Colombia"
      },
      { 
        text:"Comoros",
        value:"Comoros"
      },
      { 
        text:"Cook Islands",
        value:"Cook Islands"
      },
      { 
        text:"Costa Rica",
        value:"Costa Rica"
      },
      { 
        text:"Croatia",
        value:"Croatia"
      },
      { 
        text:"Cuba",
        value:"Cuba"
      },
      { 
        text:"Curacao",
        value:"Curacao"
      },
      { 
        text:"Cyprus",
        value:"Cyprus"
      },
      { 
        text:"Czech Republic",
        value:"Czech Republic"
      },
      { 
        text:"Democratic Republic of the Congo",
        value:"Democratic Republic of the Congo"
      },
      { 
        text:"Denmark",
        value:"Denmark"
      },
      { 
        text:"Djibouti",
        value:"Djibouti"
      },
      { 
        text:"Dominica",
        value:"Dominica"
      },
      { 
        text:"Dominican Republic",
        value:"Dominican Republic"
      },
      { 
        text:"East Timor",
        value:"East Timor"
      },
      { 
        text:"Ecuador",
        value:"Ecuador"
      },
      { 
        text:"Egypt",
        value:"Egypt"
      },
      { 
        text:"El Salvador",
        value:"El Salvador"
      },
      { 
        text:"Equatorial Guinea",
        value:"Equatorial Guinea"
      },
      { 
        text:"Eritrea",
        value:"Eritrea"
      },
      { 
        text:"Estonia",
        value:"Estonia"
      },
      { 
        text:"Ethiopia",
        value:"Ethiopia"
      },
      { 
        text:"Falkland Islands",
        value:"Falkland Islands"
      },
      { 
        text:"Faroe Islands",
        value:"Faroe Islands"
      },
      { 
        text:"Fiji",
        value:"Fiji"
      },
      { 
        text:"Finland",
        value:"Finland"
      },
      { 
        text:"France",
        value:"France"
      },
      { 
        text:"French Guiana",
        value:"French Guiana"
      },
      { 
        text:"French Polynesia",
        value:"French Polynesia"
      },
      { 
        text:"French Southern Territories",
        value:"French Southern Territories"
      },
      { 
        text:"Gabon",
        value:"Gabon"
      },
      { 
        text:"Gambia",
        value:"Gambia"
      },
      { 
        text:"Georgia",
        value:"Georgia"
      },
      { 
        text:"Germany",
        value:"Germany"
      },
      { 
        text:"Ghana",
        value:"Ghana"
      },
      { 
        text:"Gibraltar",
        value:"Gibraltar"
      },
      { 
        text:"Greece",
        value:"Greece"
      },
      { 
        text:"Greenland",
        value:"Greenland"
      },
      { 
        text:"Grenada",
        value:"Grenada"
      },
      { 
        text:"Guadeloupe",
        value:"Guadeloupe"
      },
      { 
        text:"Guam",
        value:"Guam"
      },
      { 
        text:"Guatemala",
        value:"Guatemala"
      },
      { 
        text:"Guernsey",
        value:"Guernsey"
      },
      { 
        text:"Guinea",
        value:"Guinea"
      },
      { 
        text:"Guinea-Bissau",
        value:"Guinea-Bissau"
      },
      { 
        text:"Guyana",
        value:"Guyana"
      },
      { 
        text:"Haiti",
        value:"Haiti"
      },
      { 
        text:"Heard Island and McDonald Islands",
        value:"Heard Island and McDonald Islands"
      },
      { 
        text:"Honduras",
        value:"Honduras"
      },
      { 
        text:"Hong Kong",
        value:"Hong Kong"
      },
      { 
        text:"Hungary",
        value:"Hungary"
      },
      { 
        text:"Iceland",
        value:"Iceland"
      },
      { 
        text:"India",
        value:"India"
      },
      { 
        text:"Indonesia",
        value:"Indonesia"
      },
      { 
        text:"Iran",
        value:"Iran"
      },
      { 
        text:"Iraq",
        value:"Iraq"
      },
      { 
        text:"Ireland",
        value:"Ireland"
      },
      { 
        text:"Isle of Man",
        value:"Isle of Man"
      },
      { 
        text:"Israel",
        value:"Israel"
      },
      { 
        text:"Italy",
        value:"Italy"
      },
      { 
        text:"Ivory Coast",
        value:"Ivory Coast"
      },
      { 
        text:"Jamaica",
        value:"Jamaica"
      },
      { 
        text:"Japan",
        value:"Japan"
      },
      { 
        text:"Jersey",
        value:"Jersey"
      },
      { 
        text:"Jordan",
        value:"Jordan"
      },
      { 
        text:"Kazakhstan",
        value:"Kazakhstan"
      },
      { 
        text:"Kenya",
        value:"Kenya"
      },
      { 
        text:"Kiribati",
        value:"Kiribati"
      },
      { 
        text:"Kosovo",
        value:"Kosovo"
      },
      { 
        text:"Kuwait",
        value:"Kuwait"
      },
      { 
        text:"Kyrgyzstan",
        value:"Kyrgyzstan"
      },
      { 
        text:"Laos",
        value:"Laos"
      },
      { 
        text:"Latvia",
        value:"Latvia"
      },
      { 
        text:"Lebanon",
        value:"Lebanon"
      },
      { 
        text:"Lesotho",
        value:"Lesotho"
      },
      { 
        text:"Liberia",
        value:"Liberia"
      },
      { 
        text:"Libya",
        value:"Libya"
      },
      { 
        text:"Liechtenstein",
        value:"Liechtenstein"
      },
      { 
        text:"Lithuania",
        value:"Lithuania"
      },
      { 
        text:"Luxembourg",
        value:"Luxembourg"
      },
      { 
        text:"Macao",
        value:"Macao"
      },
      { 
        text:"Macedonia",
        value:"Macedonia"
      },
      { 
        text:"Madagascar",
        value:"Madagascar"
      },
      { 
        text:"Malawi",
        value:"Malawi"
      },
      { 
        text:"Malaysia",
        value:"Malaysia"
      },
      { 
        text:"Maldives",
        value:"Maldives"
      },
      { 
        text:"Mali",
        value:"Mali"
      },
      { 
        text:"Malta",
        value:"Malta"
      },
      { 
        text:"Marshall Islands",
        value:"Marshall Islands"
      },
      { 
        text:"Martinique",
        value:"Martinique"
      },
      { 
        text:"Mauritania",
        value:"Mauritania"
      },
      { 
        text:"Mauritius",
        value:"Mauritius"
      },
      { 
        text:"Mayotte",
        value:"Mayotte"
      },
      { 
        text:"Mexico",
        value:"Mexico"
      },
      { 
        text:"Micronesia",
        value:"Micronesia"
      },
      { 
        text:"Moldova",
        value:"Moldova"
      },
      { 
        text:"Monaco",
        value:"Monaco"
      },
      { 
        text:"Mongolia",
        value:"Mongolia"
      },
      { 
        text:"Montenegro",
        value:"Montenegro"
      },
      { 
        text:"Montserrat",
        value:"Montserrat"
      },
      { 
        text:"Morocco",
        value:"Morocco"
      },
      { 
        text:"Mozambique",
        value:"Mozambique"
      },
      { 
        text:"Myanmar",
        value:"Myanmar"
      },
      { 
        text:"Namibia",
        value:"Namibia"
      },
      { 
        text:"Nauru",
        value:"Nauru"
      },
      { 
        text:"Nepal",
        value:"Nepal"
      },
      { 
        text:"Netherlands",
        value:"Netherlands"
      },
      { 
        text:"New Caledonia",
        value:"New Caledonia"
      },
      { 
        text:"New Zealand",
        value:"New Zealand"
      },
      { 
        text:"Nicaragua",
        value:"Nicaragua"
      },
      { 
        text:"Niger",
        value:"Niger"
      },
      { 
        text:"Nigeria",
        value:"Nigeria"
      },
      { 
        text:"Niue",
        value:"Niue"
      },
      { 
        text:"Norfolk Island",
        value:"Norfolk Island"
      },
      { 
        text:"North Korea",
        value:"North Korea"
      },
      { 
        text:"Northern Mariana Islands",
        value:"Northern Mariana Islands"
      },
      { 
        text:"Norway",
        value:"Norway"
      },
      { 
        text:"Oman",
        value:"Oman"
      },
      { 
        text:"Pakistan",
        value:"Pakistan"
      },
      { 
        text:"Palau",
        value:"Palau"
      },
      { 
        text:"Palestinian Territory",
        value:"Palestinian Territory"
      },
      { 
        text:"Panama",
        value:"Panama"
      },
      { 
        text:"Papua New Guinea",
        value:"Papua New Guinea"
      },
      { 
        text:"Paraguay",
        value:"Paraguay"
      },
      { 
        text:"Peru",
        value:"Peru"
      },
      { 
        text:"Philippines",
        value:"Philippines"
      },
      { 
        text:"Pitcairn",
        value:"Pitcairn"
      },
      { 
        text:"Poland",
        value:"Poland"
      },
      { 
        text:"Portugal",
        value:"Portugal"
      },
      { 
        text:"Puerto Rico",
        value:"Puerto Rico"
      },
      { 
        text:"Qatar",
        value:"Qatar"
      },
      { 
        text:"Republic of the Congo",
        value:"Republic of the Congo"
      },
      { 
        text:"Reunion",
        value:"Reunion"
      },
      { 
        text:"Romania",
        value:"Romania"
      },
      { 
        text:"Russia",
        value:"Russia"
      },
      { 
        text:"Rwanda",
        value:"Rwanda"
      },
      { 
        text:"Saint Barthelemy",
        value:"Saint Barthelemy"
      },
      { 
        text:"Saint Helena",
        value:"Saint Helena"
      },
      { 
        text:"Saint Kitts and Nevis",
        value:"Saint Kitts and Nevis"
      },
      { 
        text:"Saint Lucia",
        value:"Saint Lucia"
      },
      { 
        text:"Saint Martin",
        value:"Saint Martin"
      },
      { 
        text:"Saint Pierre and Miquelon",
        value:"Saint Pierre and Miquelon"
      },
      { 
        text:"Saint Vincent and the Grenadines",
        value:"Saint Vincent and the Grenadines"
      },
      { 
        text:"Samoa",
        value:"Samoa"
      },
      { 
        text:"San Marino",
        value:"San Marino"
      },
      { 
        text:"Sao Tome and Principe",
        value:"Sao Tome and Principe"
      },
      { 
        text:"Saudi Arabia",
        value:"Saudi Arabia"
      },
      { 
        text:"Senegal",
        value:"Senegal"
      },
      { 
        text:"Serbia",
        value:"Serbia"
      },
      { 
        text:"Seychelles",
        value:"Seychelles"
      },
      { 
        text:"Sierra Leone",
        value:"Sierra Leone"
      },
      { 
        text:"Singapore",
        value:"Singapore"
      },
      { 
        text:"Sint Maarten",
        value:"Sint Maarten"
      },
      { 
        text:"Slovakia",
        value:"Slovakia"
      },
      { 
        text:"Slovenia",
        value:"Slovenia"
      },
      { 
        text:"Solomon Islands",
        value:"Solomon Islands"
      },
      { 
        text:"Somalia",
        value:"Somalia"
      },
      { 
        text:"South Africa",
        value:"South Africa"
      },
      { 
        text:"South Georgia and the South Sandwich Islands",
        value:"South Georgia and the South Sandwich Islands"
      },
      { 
        text:"South Korea",
        value:"South Korea"
      },
      { 
        text:"South Sudan",
        value:"South Sudan"
      },
      { 
        text:"Spain",
        value:"Spain"
      },
      { 
        text:"Sri Lanka",
        value:"Sri Lanka"
      },
      { 
        text:"Sudan",
        value:"Sudan"
      },
      { 
        text:"Suriname",
        value:"Suriname"
      },
      { 
        text:"Svalbard and Jan Mayen",
        value:"Svalbard and Jan Mayen"
      },
      { 
        text:"Swaziland",
        value:"Swaziland"
      },
      { 
        text:"Sweden",
        value:"Sweden"
      },
      { 
        text:"Switzerland",
        value:"Switzerland"
      },
      { 
        text:"Syria",
        value:"Syria"
      },
      { 
        text:"Taiwan",
        value:"Taiwan"
      },
      { 
        text:"Tajikistan",
        value:"Tajikistan"
      },
      { 
        text:"Tanzania",
        value:"Tanzania"
      },
      { 
        text:"Thailand",
        value:"Thailand"
      },
      { 
        text:"Togo",
        value:"Togo"
      },
      { 
        text:"Tokelau",
        value:"Tokelau"
      },
      { 
        text:"Tonga",
        value:"Tonga"
      },
      { 
        text:"Trinidad and Tobago",
        value:"Trinidad and Tobago"
      },
      { 
        text:"Tunisia",
        value:"Tunisia"
      },
      { 
        text:"Turkey",
        value:"Turkey"
      },
      { 
        text:"Turkmenistan",
        value:"Turkmenistan"
      },
      { 
        text:"Turks and Caicos Islands",
        value:"Turks and Caicos Islands"
      },
      { 
        text:"Tuvalu",
        value:"Tuvalu"
      },
      { 
        text:"U.S. Virgin Islands",
        value:"U.S. Virgin Islands"
      },
      { 
        text:"Uganda",
        value:"Uganda"
      },
      { 
        text:"Ukraine",
        value:"Ukraine"
      },
      { 
        text:"United Arab Emirates",
        value:"United Arab Emirates"
      },
      { 
        text:"United Kingdom",
        value:"United Kingdom"
      },
      { 
        text:"United States Minor Outlying Islands",
        value:"United States Minor Outlying Islands"
      },
      { 
        text:"United States",
        value:"United States"
      },
      { 
        text:"Uruguay",
        value:"Uruguay"
      },
      { 
        text:"Uzbekistan",
        value:"Uzbekistan"
      },
      { 
        text:"Vanuatu",
        value:"Vanuatu"
      },
      { 
        text:"Vatican",
        value:"Vatican"
      },
      { 
        text:"Venezuela",
        value:"Venezuela"
      },
      { 
        text:"Vietnam",
        value:"Vietnam"
      },
      { 
        text:"Wallis and Futuna",
        value:"Wallis and Futuna"
      },
      { 
        text:"Western Sahara",
        value:"Western Sahara"
      },
      { 
        text:"Yemen",
        value:"Yemen"
      },
      { 
        text:"Zambia",
        value:"Zambia"
      },
      {
        text:"Zimbabwe",
        value:"Zimbabwe"
      }
    ],
    filterMode: 'menu',
    filterSearch: true,
    onFilter: (value, record) => record.location.country.startsWith(value),
    render: (text) => <span>{text.country}</span>,
  },
  {
    title: 'Latitude/Longitude',
    dataIndex: 'location',
    key: 'location3',
    render: (text) => <span>{text.latitude}, {text.longitude}</span>,
    fixed: 'right',
  },

  
  
];
  return (
    <div className="AllNodeDataDetails">
        {!loading && (
          <>
            <Table dataSource={data} columns={columns} pagination={false} scroll={{ y: 'calc(100vh - 55px)' }}>
            </Table>;
          </>
        )}
    </div>
  );
};

export default AllNodesDataDetails;
