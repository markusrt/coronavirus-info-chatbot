# Coronavirus Info Chatbot

Entlastung von Hotlines und Ärzte:innen durch einen Chatbot für FAQs, Verdachtsabklärung und Quarantänebetreuung. Mobil, Sprachgesteuert, Sicher.

<https://devpost.com/software/039_staatliche_kommunikation_coronavirus_info_chatbot>

## Setup

### Einrichten von DialogFlow

Verwende den folgenden Link um den Agent in DialogFlow zu installieren:

<a href="https://console.dialogflow.com/api-client/oneclick?templateUrl=h https://github.com/markusrt/coronavirus-info-chatbot/releases/latest/download/DialogFlow-Agent.zip" target="_blank">
  <img src="https://dialogflow.com/images/deploy.png">
</a>

### Einrichten des Fulfillment

TBD

## Inspiration

Wegen der Häufung von Anrufen bei Hotlines und Ärzte:innen zu allgemeinen Fragen, deren Antworten auf den Webseiten von BMG, RKI und WHO versteckt sind, laufen wir Gefahr, dass die individuelle Kommunikation beispielsweise bei Verdachtsabklärung und Quarantänebetreuung nicht mehr durchgeführt werden kann. Hierbei geht es sowohl um überlastete Personen im Gesundheitssystem als auch um nicht automatisch skalierbare IT-Systeme. Des Weiteren ist es uns wichtig, Informationen für die Nutzer:innen so einfach erreichbar wie möglich zu machen.

## Was macht dieses Projekt

Dieser Assistent beantwortet häufig gestellte Fragen mit ca. 35 ausführlichen, vorgefertigten Antworten aus vertrauenswürdigen Quellen. Nutzer:innen können darüber hinaus das Coronavirus Management verwenden, um durch Verdachtsabklärung und Quarantänebetreuung das Gesundheitswesen zu unterstützen. Siehe auch <https://www.bundesgesundheitsministerium.de/coronavirus.html>

## Wie wurde er gebaut

## Welche Herausforderungen haben sich uns gestellt

* Der Aufwand, der nötig ist, um alle Fragen der Nutzer:innen abzudecken, benötigt viel Zeit und Manpower. 
* Es stellen sich vor allem bei der Quarantänebetreuung datenschutzrechtliche Herausforderungen. Damit einher geht die Frage, wie eine datenschutzkonforme Übermittlung der erfassten Daten (Temperatur, gesundheitlicher Zustand,...) konkret umgesetzt werden kann. 
* Lösen der technischen Herausforderungen zur Wahrung einer möglichst einfachen Bedienbarkeit.

## Darauf sind wir stolz

* Einrichtung einer aktualisierten, umfangreichen FAQ Sammlung inklusive Weiterleitung der Nutzer:innen auf Seiten des BGM für weitere Informationen zur Vermittlung von offiziellen, aktuellen Informationen.
* Einrichtung einer initialen Verdachtsabklärung, welche die Nutzer:innen nach Leitlinien des RKI dabei unterstützt, festzustellen, ob sie möglicherweise mit SARS-CoV-2 infiziert sind. Anschließende Weiterleitung der Nutzer:innen an offizielle Stellen bei anfänglichem Infektionsverdacht.

## Was haben wir gelernt

* Wie es gelingt unter 20.000 Menschen ein Team von fünf Teilnehmern zu finden
* Nutzung von Slack, Devpost,... zur Organisation
* Nutzung von Google Dialogflow zur Erstellung eines Chatbots.

## Was kommt als nächstes

* Erweiterung des Assistenten zur Verdachtsabklärung, sodass auf alle eventuellen Eingaben der Nutzer:innen eingegangen werden kann.
* Erweiterung und schließlich Umsetzung des Flowcharts zur Quarantänebetreuung, bei der die Patient:innen ihren Gesundheitszustand an das zuständige Gesundheitsamt melden können zur Entlastung der telefonischen Betreuung.
* Validierung aller Daten auf Korrektheit aus medizinischer Sicht; Sicherstellung der datenschutzrechtlichen Konformität.
* Bei einem produktiven Einsatz: Laufende Aktualisierung und Erweiterung der FAQ nach Hinweisen aus Google Analytics im Dialogflow.

## Resourcen für Entwickler

### Release

Um einen Release durchzuführen muss der entsprechende Commit getaggt und dann entsprechend gepusht werden:

```
git tag -a v0.3
git push --follow-tags
```

Der Workflow `.github\workflows\realease.yml` sorgt dann für den Rest :)

### Dokumentation

DialogFlow Dokumentation: <https://cloud.google.com/dialogflow/docs?hl=de>
Konzepte: <https://cloud.google.com/dialogflow/docs/concepts?hl=de>
Contexte und Fulfillment: <https://cloud.google.com/dialogflow/docs/contexts-fulfillment?hl=de>
