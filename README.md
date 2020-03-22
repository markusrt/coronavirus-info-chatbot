# Coronavirus Info Chatbot

Entlastung von Hotlines und Ärzte:innen durch einen Chatbot für FAQs, Verdachtsabklärung und Quarantänebetreuung. Mobil, Sprachgesteuert, Sicher.

<https://devpost.com/software/039_staatliche_kommunikation_coronavirus_info_chatbot>

## Setup

### Einrichten von DialogFlow

Packt den Ordner `./dialogflow-agent` in ein ZIP-Archiv und importiert dies in einen neuen Agenten bei <https://dialogflow.cloud.google.com/> (`Agent Settings (cog-icon) -> Export and Import -> Restore from ZIP`)

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
** Nutzung von Slack, Devpost,... zur Organisation
* Nutzung von Google Dialogflow zur Erstellung eines Chatbots.

## Was kommt als nächstes

TBD

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
