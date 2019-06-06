export default `
<ClinicalDocument xmlns="urn:hl7-org:v3">
  <realmCode code="US" />
  <typeId extension="POCD_HD000040" root="2.16.840.1.113883.1.3" />
  <templateId root="1.2.840.114350.1.72.1.51693" />
  <templateId root="2.16.840.1.113883.10.20.22.1.1" />
  <templateId root="2.16.840.1.113883.10.20.22.1.1"
  extension="2015-08-01" />
  <templateId root="2.16.840.1.113883.10.20.22.1.9" />
  <templateId root="2.16.840.1.113883.10.20.22.1.9"
  extension="2015-08-01" />
  <id assigningAuthorityName="EPC"
  root="1.2.840.114350.1.13.283.2.7.8.688883.188336151" />
  <code code="11506-3" codeSystem="2.16.840.1.113883.6.1"
  codeSystemName="LOINC"
  displayName="Subsequent evaluation note" />
  <title>Encounter Summary</title>
  <effectiveTime value="20190301171837-0600" />
  <confidentialityCode code="N" codeSystem="2.16.840.1.113883.5.25"
  displayName="Normal" />
  <languageCode code="en-US" />
  <setId assigningAuthorityName="EPC"
  extension="171ff58c-3c43-11e9-8498-4503b6aa49bb"
  root="1.2.840.114350.1.13.283.2.7.1.1" />
  <versionNumber value="3" />
  <recordTarget>
    <patientRole>
      <id root="1.2.840.114350.1.13.283.2.7.3.688884.100"
      extension="IHS665928U" />
      <addr use="HP">
        <streetAddressLine>443 Virginia Terrace</streetAddressLine>
        <city>MADISON</city>
        <state>WI</state>
        <postalCode>53726</postalCode>
        <country>USA</country>
        <county>DANE</county>
      </addr>
      <telecom use="MC" value="tel:+1-617-500-3253" />
      <telecom use="HP" value="tel:+1-617-500-3253" />
      <telecom value="mailto:jmandel@alum.mit.edu" />
      <telecom value="mailto:jmandel@gmail.com" />
      <patient>
        <name use="L">
          <given>Joshua</given>
          <given>C</given>
          <family>Mandel</family>
        </name>
        <administrativeGenderCode code="M"
        codeSystem="2.16.840.1.113883.5.1"
        codeSystemName="AdministrativeGenderCode"
        displayName="Male" />
        <birthTime value="19821026" />
        <maritalStatusCode code="S"
        codeSystem="2.16.840.1.113883.5.2"
        codeSystemName="MaritalStatusCode" displayName="Single" />
        <raceCode code="2106-3"
        codeSystem="2.16.840.1.113883.6.238"
        codeSystemName="CDC Race and Ethnicity"
        displayName="White" />
        <ethnicGroupCode code="2186-5"
        codeSystem="2.16.840.1.113883.6.238"
        codeSystemName="CDC Race and Ethnicity"
        displayName="Not Hispanic or Latino" />
        <languageCommunication>
          <languageCode code="eng" />
          <preferenceInd value="true" />
        </languageCommunication>
      </patient>
      <providerOrganization>
        <id root="1.2.840.114350.1.13.283.2.7.2.688879"
        extension="11000" />
        <name>UnityPoint Health</name>
        <telecom nullFlavor="NA" />
        <addr>
          <streetAddressLine nullFlavor="UNK" />
          <city>Des Moines</city>
          <state>IA</state>
          <postalCode>50309</postalCode>
          <country>USA</country>
        </addr>
      </providerOrganization>
    </patientRole>
  </recordTarget>
  <author>
    <time value="20190301171837-0600" />
    <assignedAuthor>
      <id root="1.2.840.114350.1.1" extension="8.3" />
      <addr nullFlavor="NA" />
      <telecom nullFlavor="NA" />
      <assignedAuthoringDevice>
        <manufacturerModelName>Epic - Version
        8.3</manufacturerModelName>
        <softwareName>Epic - Version 8.3</softwareName>
      </assignedAuthoringDevice>
      <representedOrganization>
        <id root="1.2.840.114350.1.13.283.2.7.2.688879"
        extension="11000" />
        <name>UnityPoint Health</name>
        <telecom nullFlavor="NA" />
        <addr>
          <streetAddressLine nullFlavor="UNK" />
          <city>Des Moines</city>
          <state>IA</state>
          <postalCode>50309</postalCode>
          <country>USA</country>
        </addr>
      </representedOrganization>
    </assignedAuthor>
  </author>
  <custodian>
    <assignedCustodian>
      <representedCustodianOrganization>
        <id root="1.2.840.114350.1.13.283.2.7.2.688879"
        extension="11000" />
        <name>UnityPoint Health</name>
        <telecom nullFlavor="NA" />
        <addr>
          <streetAddressLine nullFlavor="UNK" />
          <city>Des Moines</city>
          <state>IA</state>
          <postalCode>50309</postalCode>
          <country>USA</country>
        </addr>
      </representedCustodianOrganization>
    </assignedCustodian>
  </custodian>
  <participant typeCode="IND">
    <time value="20180717" />
    <associatedEntity classCode="ECON">
      <id nullFlavor="UNK" />
      <code nullFlavor="OTH">
        <originalText>Significant other</originalText>
      </code>
      <addr>
        <streetAddressLine>443 Virginia Terrace</streetAddressLine>
        <city>MADISON</city>
        <state>WI</state>
        <postalCode>53726</postalCode>
        <country>USA</country>
      </addr>
      <telecom use="MC" value="tel:+1-478-227-7436" />
      <telecom use="HP" value="tel:+1-478-227-7436" />
      <associatedPerson>
        <name>Niviolek,Caroline</name>
      </associatedPerson>
    </associatedEntity>
  </participant>
  <documentationOf typeCode="DOC">
    <serviceEvent classCode="PCPR">
      <templateId root="2.16.840.1.113883.10.20.21.3.1" />
      <effectiveTime>
        <low value="20180809092927-0500" />
        <high value="20180809101457-0500" />
      </effectiveTime>
      <performer typeCode="PRF">
        <functionCode code="PCP"
        codeSystem="2.16.840.1.113883.5.88"
        codeSystemName="ParticipationFunction"
        displayName="Primary Care Provider">
          <originalText>General</originalText>
        </functionCode>
        <time>
          <low value="20180717" />
          <high nullFlavor="PINF" />
        </time>
        <assignedEntity>
          <id root="1.2.840.114350.1.13.283.2.7.2.836982"
          extension="802011" />
          <code nullFlavor="UNK">
            <originalText>Internal Medicine</originalText>
          </code>
          <addr use="WP">
            <streetAddressLine>4410 REGENT ST</streetAddressLine>
            <city>MADISON</city>
            <state>WI</state>
            <postalCode>53705</postalCode>
          </addr>
          <telecom use="WP" value="tel:+1-608-233-9746" />
          <telecom value="fax:+1-608-233-0026" />
          <assignedPerson>
            <name>
              <given>P</given>
              <family>Dhillon</family>
            </name>
          </assignedPerson>
        </assignedEntity>
      </performer>
    </serviceEvent>
  </documentationOf>
  <relatedDocument typeCode="RPLC">
    <parentDocument>
      <id assigningAuthorityName="EPC"
      root="1.2.840.114350.1.13.283.2.7.8.688883.188221830" />
      <setId assigningAuthorityName="EPC"
      extension="171ff58c-3c43-11e9-8498-4503b6aa49bb"
      root="1.2.840.114350.1.13.283.2.7.8.688883.188221830" />
      <versionNumber value="2" />
    </parentDocument>
  </relatedDocument>
  <componentOf>
    <encompassingEncounter>
      <id root="1.2.840.114350.1.13.283.2.7.3.698084.8"
      extension="720803470" />
      <code code="99395" codeSystem="2.16.840.1.113883.6.12"
      displayName="PREVENTIVE VISIT,EST,18-39">
        <originalText>Office Visit</originalText>
        <translation code="AMB" codeSystem="2.16.840.1.113883.5.4"
        displayName="Ambulatory" />
        <translation code="101"
        codeSystem="1.2.840.114350.1.72.1.30"
        displayName="Office Visit" />
      </code>
      <effectiveTime>
        <low value="20180809092927-0500" />
        <high value="20180809101457-0500" />
      </effectiveTime>
      <encounterParticipant typeCode="ATND">
        <time value="20180809092927-0500" />
        <assignedEntity>
          <id root="1.2.840.114350.1.13.283.2.7.2.836982"
          extension="802011" />
          <code nullFlavor="UNK">
            <originalText>Internal Medicine</originalText>
          </code>
          <addr use="WP">
            <streetAddressLine>4410 REGENT ST</streetAddressLine>
            <city>MADISON</city>
            <state>WI</state>
            <postalCode>53705</postalCode>
          </addr>
          <telecom use="WP" value="tel:+1-608-233-9746" />
          <telecom value="fax:+1-608-233-0026" />
          <assignedPerson>
            <name>
              <given>P</given>
              <family>Dhillon</family>
            </name>
          </assignedPerson>
        </assignedEntity>
      </encounterParticipant>
      <location>
        <healthCareFacility>
          <id root="1.2.840.114350.1.13.283.2.7.2.686980"
          extension="1700801002" />
          <code nullFlavor="UNK">
            <originalText>Internal Medicine</originalText>
          </code>
          <location>
            <name>Assoc Physicians Internal Medicine</name>
            <addr>
              <streetAddressLine>4410 Regent ST</streetAddressLine>
              <city>MADISON</city>
              <state>WI</state>
              <postalCode>53705</postalCode>
            </addr>
          </location>
          <serviceProviderOrganization>
            <id root="1.2.840.114350.1.13.283.2.7.2.696570"
            extension="1700801" />
            <name>CLN MAC ASSOCIATED PHYSICIANS LLP</name>
            <addr>
              <streetAddressLine>4410 Regent ST</streetAddressLine>
              <city>MADISON</city>
              <state>WI</state>
              <postalCode>53705</postalCode>
              <country nullFlavor="UNK" />
            </addr>
            <asOrganizationPartOf>
              <wholeOrganization>
                <name>UnityPoint Health</name>
                <addr nullFlavor="NA" />
              </wholeOrganization>
            </asOrganizationPartOf>
          </serviceProviderOrganization>
        </healthCareFacility>
      </location>
    </encompassingEncounter>
  </componentOf>
  <component>
    <structuredBody>
      <component>
        <section>
          <code code="X-DOCCMT" codeSystem="1.2.840.114350.1.72.2"
          displayName="Document Comments" />
          <title>Note from UnityPoint Health</title>
          <text>This document contains information that was shared
          with Joshua C Mandel. It may not contain the entire
          record from UnityPoint Health.</text>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.12" />
          <code code="29299-5" codeSystem="2.16.840.1.113883.6.1"
          codeSystemName="LOINC" displayName="REASON FOR VISIT" />
          <title>Reason for Visit</title>
          <text>
            <list>
              <item>
                <table>
                  <colgroup>
                    <col width="25%" />
                  </colgroup>
                  <thead>
                    <tr>
                      <th>Reason</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr ID="rfv3">
                      <td ID="reasonrfv3">Establish Care</td>
                    </tr>
                    <tr ID="rfv4">
                      <td ID="reasonrfv4">Annual Exam</td>
                    </tr>
                  </tbody>
                </table>
              </item>
            </list>
          </text>
          <entry>
            <observation classCode="OBS" moodCode="EVN">
              <templateId root="1.2.840.114350.1.72.7" />
              <id root="1.2.840.114350.1.13.283.2.7.2.728286"
              extension="2d4qdv4qDpoZlJMv/c6MezOqXrEWwhDbX3Eql93F700=" />
              <code code="8661-1"
              codeSystem="2.16.840.1.113883.6.1"
              codeSystemName="LOINC"
              displayName="Chief Complaint" />
              <statusCode code="completed" />
              <effectiveTime nullFlavor="UNK" />
              <value nullFlavor="UNK" xsi:type="CD"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

                <originalText>Establish Care</originalText>
              </value>
            </observation>
          </entry>
          <entry>
            <observation classCode="OBS" moodCode="EVN">
              <templateId root="1.2.840.114350.1.72.7" />
              <id root="1.2.840.114350.1.13.283.2.7.2.728286"
              extension="uENSEYf9MCUcT+btjB3wEpXeVLwsW2hITZAb6iZMjw4=" />
              <code code="8661-1"
              codeSystem="2.16.840.1.113883.6.1"
              codeSystemName="LOINC"
              displayName="Chief Complaint" />
              <statusCode code="completed" />
              <effectiveTime nullFlavor="UNK" />
              <value nullFlavor="UNK" xsi:type="CD"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

                <originalText>Annual Exam</originalText>
              </value>
            </observation>
          </entry>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.22" />
          <templateId root="2.16.840.1.113883.10.20.22.2.22"
          extension="2015-08-01" />
          <templateId root="2.16.840.1.113883.10.20.22.2.22.1" />
          <templateId root="2.16.840.1.113883.10.20.22.2.22.1"
          extension="2015-08-01" />
          <code code="46240-8" codeSystem="2.16.840.1.113883.6.1"
          codeSystemName="LOINC"
          displayName="HISTORY OF ENCOUNTERS" />
          <title>Encounter Details</title>
          <text>
            <table>
              <colgroup>
                <col width="10%" />
                <col width="15%" />
                <col width="25%" />
                <col width="25%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Type</th>
                  <th>Department</th>
                  <th>Care Team</th>
                </tr>
              </thead>
              <tbody>
                <tr ID="encounter5" styleCode="normRow">
                  <td>08/09/2018</td>
                  <td ID="encounter5type">Office Visit</td>
                  <td>
                    <paragraph>Assoc Physicians Internal
                    Medicine</paragraph>
                    <paragraph>4410 Regent ST</paragraph>
                    <paragraph>MADISON, WI 53705</paragraph>
                    <paragraph>608-233-9746</paragraph>
                  </td>
                  <td>
                    <paragraph styleCode="Bold">Dr. P
                    Dhillon</paragraph>
                    <paragraph>4410 REGENT ST</paragraph>
                    <paragraph>MADISON, WI 53705</paragraph>
                    <paragraph>608-233-9746</paragraph>
                    <paragraph>608-233-0026 (Fax)</paragraph>
                  </td>
                </tr>
              </tbody>
            </table>
          </text>
          <entry>
            <encounter classCode="ENC" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.49" />
              <templateId root="2.16.840.1.113883.10.20.22.4.49"
              extension="2015-08-01" />
              <id assigningAuthorityName="EPIC"
              root="1.2.840.114350.1.13.283.2.7.3.698084.8"
              extension="720803470" />
              <code code="99395"
              codeSystem="2.16.840.1.113883.6.12"
              displayName="PREVENTIVE VISIT,EST,18-39">
                <originalText>
                  <reference value="#encounter5type" />
                </originalText>
                <translation code="101"
                codeSystem="1.2.840.114350.1.13.283.2.7.4.698084.30"
                displayName="Office Visit"
                codeSystemName="Epic.EncounterType" />
                <translation code="AMB"
                codeSystem="2.16.840.1.113883.5.4"
                displayName="Ambulatory" />
                <translation code="101"
                codeSystem="1.2.840.114350.1.72.1.30"
                displayName="Office Visit" />
              </code>
              <text>
                <reference value="#encounter5" />
              </text>
              <statusCode code="normal" />
              <effectiveTime>
                <low value="20180809092927-0500" />
                <high value="20180809101457-0500" />
              </effectiveTime>
              <performer typeCode="PRF">
                <time>
                  <low nullFlavor="UNK" />
                  <high nullFlavor="UNK" />
                </time>
                <assignedEntity classCode="ASSIGNED">
                  <id root="1.2.840.114350.1.13.283.2.7.2.836982"
                  extension="802011" />
                  <code nullFlavor="UNK">
                    <originalText>Internal Medicine</originalText>
                  </code>
                  <addr>
                    <streetAddressLine>4410 REGENT
                    ST</streetAddressLine>
                    <city>MADISON</city>
                    <state>WI</state>
                    <postalCode>53705</postalCode>
                  </addr>
                  <telecom use="WP" value="tel:+1-608-233-9746" />
                  <telecom value="fax:+1-608-233-0026" />
                  <assignedPerson>
                    <name>
                      <given>P</given>
                      <family>Dhillon</family>
                    </name>
                  </assignedPerson>
                  <representedOrganization classCode="ORG">
                    <name nullFlavor="UNK" />
                    <telecom nullFlavor="UNK" />
                    <addr nullFlavor="UNK" />
                  </representedOrganization>
                </assignedEntity>
              </performer>
              <participant typeCode="LOC">
                <participantRole classCode="SDLOC">
                  <templateId root="2.16.840.1.113883.10.20.22.4.32" />
                  <id root="1.2.840.114350.1.13.283.2.7.2.686980"
                  extension="1700801002" />
                  <code nullFlavor="UNK">
                    <originalText>Internal Medicine</originalText>
                  </code>
                  <addr>
                    <streetAddressLine>4410 Regent
                    ST</streetAddressLine>
                    <city>MADISON</city>
                    <state>WI</state>
                    <postalCode>53705</postalCode>
                  </addr>
                  <playingEntity classCode="PLC">
                    <name>Assoc Physicians Internal Medicine</name>
                    <desc>Internal Medicine</desc>
                  </playingEntity>
                </participantRole>
              </participant>
              <entryRelationship typeCode="SUBJ">
                <act classCode="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80"
                  extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.1099.1"
                  extension="720803470-444804" />
                  <code code="29308-4"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC"
                  displayName="Encounter Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ"
                  inversionInd="false">
                    <observation classCode="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4"
                      extension="2015-08-01" />
                      <id root="1.2.840.114350.1.13.283.2.7.1.1099.1"
                      extension="720803470-444804" />
                      <code code="282291009"
                      codeSystem="2.16.840.1.113883.6.96"
                      codeSystemName="SNOMED CT"
                      displayName="Diagnosis">
                        <translation code="29308-4"
                        codeSystem="2.16.840.1.113883.6.1"
                        displayName="Diagnosis"
                        codeSystemName="LOINC" />
                      </code>
                      <text>Encounter to establish care</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value xsi:type="CD" code="307824009"
                      codeSystem="2.16.840.1.113883.6.96"
                      codeSystemName="SNOMED CT"
                      displayName="Encounter to establish care"
                      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

                        <originalText>Encounter to establish care
                        <reference value="#vdx6Name" /></originalText>
                        <translation code="Z76.89"
                        codeSystem="2.16.840.1.113883.6.90"
                        displayName="Encounter to establish care"
                        codeSystemName="ICD-10-CM" />
                        <translation code="V65.8"
                        codeSystem="2.16.840.1.113883.6.103"
                        displayName="Encounter to establish care"
                        codeSystemName="ICD-9CM" />
                        <translation code="24286045"
                        codeSystem="2.16.840.1.113883.3.247.1.1"
                        displayName="Encounter to establish care"
                        codeSystemName="Intelligent Medical Objects ProblemIT" />
                      </value>
                      <entryRelationship typeCode="REFR">
                        <observation classCode="OBS"
                        moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <code code="33999-4"
                          codeSystem="2.16.840.1.113883.6.1"
                          displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value xsi:type="CD" code="55561003"
                          codeSystem="2.16.840.1.113883.6.96"
                          displayName="Active"
                          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classCode="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80"
                  extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.1099.1"
                  extension="720803470-1181154" />
                  <code code="29308-4"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC"
                  displayName="Encounter Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ"
                  inversionInd="false">
                    <observation classCode="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4"
                      extension="2015-08-01" />
                      <id root="1.2.840.114350.1.13.283.2.7.1.1099.1"
                      extension="720803470-1181154" />
                      <code code="282291009"
                      codeSystem="2.16.840.1.113883.6.96"
                      codeSystemName="SNOMED CT"
                      displayName="Diagnosis">
                        <translation code="29308-4"
                        codeSystem="2.16.840.1.113883.6.1"
                        displayName="Diagnosis"
                        codeSystemName="LOINC" />
                      </code>
                      <text>Gastroesophageal reflux disease,
                      esophagitis presence not specified</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value xsi:type="CD" code="235595009"
                      codeSystem="2.16.840.1.113883.6.96"
                      codeSystemName="SNOMED CT"
                      displayName="Gastroesophageal reflux disease, esophagitis presence not specified"
                      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

                        <originalText>Gastroesophageal reflux
                        disease, esophagitis presence not specified
                        <reference value="#vdx7Name" /></originalText>
                        <translation code="K21.9"
                        codeSystem="2.16.840.1.113883.6.90"
                        displayName="Gastroesophageal reflux disease, esophagitis presence not specified"
                        codeSystemName="ICD-10-CM" />
                        <translation code="530.81"
                        codeSystem="2.16.840.1.113883.6.103"
                        displayName="Gastroesophageal reflux disease, esophagitis presence not specified"
                        codeSystemName="ICD-9CM" />
                        <translation code="550551519"
                        codeSystem="2.16.840.1.113883.3.247.1.1"
                        displayName="Gastroesophageal reflux disease, esophagitis presence not specified"
                        codeSystemName="Intelligent Medical Objects ProblemIT" />
                      </value>
                      <entryRelationship typeCode="REFR">
                        <observation classCode="OBS"
                        moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <code code="33999-4"
                          codeSystem="2.16.840.1.113883.6.1"
                          displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value xsi:type="CD" code="55561003"
                          codeSystem="2.16.840.1.113883.6.96"
                          displayName="Active"
                          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <entryRelationship typeCode="SUBJ">
                <act classCode="ACT" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.80" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.80"
                  extension="2015-08-01" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.1099.1"
                  extension="720803470-94362" />
                  <code code="29308-4"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC"
                  displayName="Encounter Diagnosis" />
                  <statusCode code="active" />
                  <entryRelationship typeCode="SUBJ"
                  inversionInd="false">
                    <observation classCode="OBS" moodCode="EVN">
                      <templateId root="2.16.840.1.113883.10.20.22.4.4" />
                      <templateId root="2.16.840.1.113883.10.20.22.4.4"
                      extension="2015-08-01" />
                      <id root="1.2.840.114350.1.13.283.2.7.1.1099.1"
                      extension="720803470-94362" />
                      <code code="282291009"
                      codeSystem="2.16.840.1.113883.6.96"
                      codeSystemName="SNOMED CT"
                      displayName="Diagnosis">
                        <translation code="29308-4"
                        codeSystem="2.16.840.1.113883.6.1"
                        displayName="Diagnosis"
                        codeSystemName="LOINC" />
                      </code>
                      <text>Dyspepsia</text>
                      <statusCode code="completed" />
                      <effectiveTime>
                        <low nullFlavor="UNK" />
                      </effectiveTime>
                      <value xsi:type="CD" code="162031009"
                      codeSystem="2.16.840.1.113883.6.96"
                      codeSystemName="SNOMED CT"
                      displayName="Dyspepsia"
                      xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance">

                        <originalText>Dyspepsia
                        <reference value="#vdx8Name" /></originalText>
                        <translation code="R10.13"
                        codeSystem="2.16.840.1.113883.6.90"
                        displayName="Dyspepsia"
                        codeSystemName="ICD-10-CM" />
                        <translation code="536.8"
                        codeSystem="2.16.840.1.113883.6.103"
                        displayName="Dyspepsia"
                        codeSystemName="ICD-9CM" />
                        <translation code="42458"
                        codeSystem="2.16.840.1.113883.3.247.1.1"
                        displayName="Dyspepsia"
                        codeSystemName="Intelligent Medical Objects ProblemIT" />
                      </value>
                      <entryRelationship typeCode="REFR">
                        <observation classCode="OBS"
                        moodCode="EVN">
                          <templateId root="2.16.840.1.113883.10.20.22.4.6" />
                          <code code="33999-4"
                          codeSystem="2.16.840.1.113883.6.1"
                          displayName="Status" />
                          <statusCode code="completed" />
                          <effectiveTime>
                            <low nullFlavor="UNK" />
                          </effectiveTime>
                          <value xsi:type="CD" code="55561003"
                          codeSystem="2.16.840.1.113883.6.96"
                          displayName="Active"
                          xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                        </observation>
                      </entryRelationship>
                    </observation>
                  </entryRelationship>
                </act>
              </entryRelationship>
              <reference typeCode="REFR">
                <externalObservation>
                  <code code="2"
                  codeSystem="1.2.840.114350.1.13.283.2.7.3.688882.8100"
                  codeSystemName="Epic.Encounter.Contents" />
                </externalObservation>
              </reference>
            </encounter>
          </entry>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.17" />
          <templateId root="2.16.840.1.113883.10.20.22.2.17"
          extension="2015-08-01" />
          <code code="29762-2" codeSystem="2.16.840.1.113883.6.1"
          codeSystemName="LOINC" displayName="Social history" />
          <title>Social History</title>
          <text>
            <table>
              <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="13%" />
                <col width="12%" />
                <col width="25%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Tobacco Use</th>
                  <th>Types</th>
                  <th>Packs/Day</th>
                  <th>Years Used</th>
                  <th>Date</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Never Smoker</td>
                  <td />
                  <td />
                  <td />
                  <td />
                </tr>
                <tr>
                  <td>Smokeless Tobacco: Never Used</td>
                  <td />
                  <td colspan="2" />
                  <td />
                </tr>
              </tbody>
            </table>
            <table>
              <colgroup>
                <col width="25%" />
                <col width="13%" />
                <col width="12%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Alcohol Use</th>
                  <th>Drinks/Week</th>
                  <th>oz/Week</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Yes</td>
                  <td />
                  <td />
                </tr>
              </tbody>
            </table>
            <footnote ID="subTitle10"
            styleCode="xSectionSubTitle xHidden">as of this
            encounter</footnote>
          </text>
          <entry>
            <observation classCode="OBS" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.78" />
              <templateId root="2.16.840.1.113883.10.20.22.4.78"
              extension="2014-06-09" />
              <id root="1.2.840.114350.1.13.283.2.7.1.1040.1"
              extension="Z7004242^64869^72166-2" />
              <code code="72166-2"
              codeSystem="2.16.840.1.113883.6.1"
              codeSystemName="LOINC"
              displayName="Tobacco smoking status NHIS" />
              <statusCode code="completed" />
              <effectiveTime value="20180809" />
              <value xsi:type="CD" code="266919005"
              codeSystem="2.16.840.1.113883.6.96"
              displayName="Never smoker"
              xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
            </observation>
          </entry>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.4" />
          <templateId root="2.16.840.1.113883.10.20.22.2.4"
          extension="2015-08-01" />
          <code code="8716-3" codeSystem="2.16.840.1.113883.6.1"
          codeSystemName="LOINC" displayName="Vital Signs" />
          <title>Last Filed Vital Signs</title>
          <text>
            <table>
              <colgroup>
                <col width="25%" />
                <col width="25%" />
                <col width="50%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Vital Sign</th>
                  <th>Reading</th>
                  <th>Time Taken</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td styleCode="cellHeader">Blood Pressure</td>
                  <td>
                  <content ID="sysBP_5604735000">122</content>/
                  <content ID="diaBP_5604735000">70</content></td>
                  <td>08/09/2018 9:50 AM CDT</td>
                </tr>
                <tr>
                  <td styleCode="cellHeader">Pulse</td>
                  <td ID="pulse_5604735000">78</td>
                  <td>08/09/2018 9:50 AM CDT</td>
                </tr>
                <tr>
                  <td styleCode="cellHeader">Temperature</td>
                  <td ID="temp_">-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td styleCode="cellHeader">Respiratory Rate</td>
                  <td ID="resp_">-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td styleCode="cellHeader">Oxygen Saturation</td>
                  <td ID="SpO2_">-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td styleCode="cellHeader">Inhaled Oxygen
                  Concentration</td>
                  <td ID="inhaled_">-</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td styleCode="cellHeader">Weight</td>
                  <td ID="weight_5604735000">78.9 kg (174 lb)</td>
                  <td>08/09/2018 9:50 AM CDT</td>
                </tr>
                <tr>
                  <td styleCode="cellHeader">Height</td>
                  <td ID="height_5604735000">180.3 cm (5' 11")</td>
                  <td>08/09/2018 9:50 AM CDT</td>
                </tr>
                <tr>
                  <td styleCode="cellHeader">Body Mass Index</td>
                  <td ID="bmi_5604735000">24.27</td>
                  <td>08/09/2018 9:50 AM CDT</td>
                </tr>
              </tbody>
            </table>
            <footnote ID="subTitle12"
            styleCode="xSectionSubTitle xHidden">in this
            encounter</footnote>
          </text>
          <entry typeCode="DRIV">
            <organizer classCode="CLUSTER" moodCode="EVN">
              <templateId root="2.16.840.1.113883.10.20.22.4.26" />
              <templateId root="2.16.840.1.113883.10.20.22.4.26"
              extension="2015-08-01" />
              <id root="1.2.840.114350.1.13.283.2.7.1.2109"
              extension="5604735000-Z7004242" />
              <code code="46680005"
              codeSystem="2.16.840.1.113883.6.96"
              codeSystemName="SNOMED CT" displayName="Vital signs">
                <translation code="74728-7"
                codeSystem="2.16.840.1.113883.6.1"
                displayName="Vital signs, weight, height, head circumference, oximetry, BMI, and BSA panel - HL7.CCDAr1.1"
                codeSystemName="LOINC" />
              </code>
              <statusCode code="completed" />
              <effectiveTime value="20180809145000+0000" />
              <component>
                <observation classCode="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27"
                  extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.2109.1"
                  extension="5604735000-sysBP-Z7004242" />
                  <code code="8480-6"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC">
                    <originalText>SYSTOLIC BLOOD
                    PRESSURE</originalText>
                  </code>
                  <text>
                    <reference value="#sysBP_5604735000" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20180809145000+0000" />
                  <value xsi:type="PQ" unit="mm[Hg]" value="122"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                </observation>
              </component>
              <component>
                <observation classCode="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27"
                  extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.2109.1"
                  extension="5604735000-diaBP-Z7004242" />
                  <code code="8462-4"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC">
                    <originalText>DIASTOLIC BLOOD
                    PRESSURE</originalText>
                  </code>
                  <text>
                    <reference value="#diaBP_5604735000" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20180809145000+0000" />
                  <value xsi:type="PQ" unit="mm[Hg]" value="70"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                </observation>
              </component>
              <component>
                <observation classCode="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27"
                  extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.2109.1"
                  extension="5604735000-pulse-Z7004242" />
                  <code code="8867-4"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC">
                    <originalText>HEART RATE</originalText>
                  </code>
                  <text>
                    <reference value="#pulse_5604735000" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20180809145000+0000" />
                  <value xsi:type="PQ" unit="/min" value="78"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                </observation>
              </component>
              <component>
                <observation classCode="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27"
                  extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.2109.1"
                  extension="5604735000-heightC83-Z7004242" />
                  <code code="8302-2"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC">
                    <originalText>HEIGHT</originalText>
                  </code>
                  <text>
                    <reference value="#height_5604735000" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20180809145000+0000" />
                  <value xsi:type="PQ" unit="cm" value="180.3"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                </observation>
              </component>
              <component>
                <observation classCode="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27"
                  extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.2109.1"
                  extension="5604735000-weightC83-Z7004242" />
                  <code code="29463-7"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC">
                    <originalText>WEIGHT</originalText>
                  </code>
                  <text>
                    <reference value="#weight_5604735000" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20180809145000+0000" />
                  <value xsi:type="PQ" unit="kg" value="78.926"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                </observation>
              </component>
              <component>
                <observation classCode="OBS" moodCode="EVN">
                  <templateId root="2.16.840.1.113883.10.20.22.4.27" />
                  <templateId root="2.16.840.1.113883.10.20.22.4.27"
                  extension="2014-06-09" />
                  <id root="1.2.840.114350.1.13.283.2.7.1.2109.1"
                  extension="5604735000-bmi-Z7004242" />
                  <code code="39156-5"
                  codeSystem="2.16.840.1.113883.6.1"
                  codeSystemName="LOINC">
                    <originalText>BODY MASS INDEX</originalText>
                  </code>
                  <text>
                    <reference value="#bmi_5604735000" />
                  </text>
                  <statusCode code="completed" />
                  <effectiveTime value="20180809145000+0000" />
                  <value xsi:type="PQ" unit="kg/m2" value="24.27"
                  xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" />
                </observation>
              </component>
            </organizer>
          </entry>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.10" />
          <templateId root="2.16.840.1.113883.10.20.22.2.10"
          extension="2014-06-09" />
          <code code="18776-5" codeSystem="2.16.840.1.113883.6.1"
          codeSystemName="LOINC" displayName="Treatment plan" />
          <title>Plan of Treatment</title>
          <text>
            <paragraph>Not on file</paragraph>
            <footnote ID="subTitle20"
            styleCode="xSectionSubTitle xHidden">as of this
            encounter</footnote>
          </text>
        </section>
      </component>
      <component>
        <section>
          <templateId root="2.16.840.1.113883.10.20.22.2.8" />
          <id root="5799033A-3C78-11E9-922D-4503B6AA49BB" />
          <code code="51848-0" codeSystem="2.16.840.1.113883.6.1"
          codeSystemName="LOINC" displayName="Assessments" />
          <title>Visit Diagnoses</title>
          <text>
            <table>
              <colgroup>
                <col width="100%" />
              </colgroup>
              <thead>
                <tr>
                  <th>Diagnosis</th>
                </tr>
              </thead>
              <tbody>
                <tr ID="vdx6" styleCode="normRow">
                  <td>
                    <paragraph>
                      <content ID="vdx6Name">Encounter to establish
                      care</content>
                      <content>- Primary</content>
                    </paragraph>
                  </td>
                </tr>
                <tr ID="vdx7" styleCode="altRow">
                  <td>
                    <paragraph>
                      <content ID="vdx7Name">Gastroesophageal
                      reflux disease, esophagitis presence not
                      specified</content>
                    </paragraph>
                  </td>
                </tr>
                <tr ID="vdx8" styleCode="normRow">
                  <td>
                    <paragraph>
                      <content ID="vdx8Name">Dyspepsia</content>
                    </paragraph>
                  </td>
                </tr>
              </tbody>
            </table>
          </text>
        </section>
      </component>
    </structuredBody>
  </component>
</ClinicalDocument>
`