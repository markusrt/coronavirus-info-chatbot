# Coronavirus Info Chatbot

Coronavirus Google Assistent Bot der FAQs beantwortet. Zudem soll er bei der Fallabklärung potentiell Betroffener helfen und die Selbst-Quarantäne unterstützen.

<https://devpost.com/software/039_staatliche_kommunikation_coronavirus_info_chatbot>

## Setup

### Einrichten von DialogFlow

Packt den Ordner `./dialogflow-agent` in ein ZIP-Archiv und importiert dies in einen neuen Agenten bei <https://dialogflow.cloud.google.com/> (`Agent Settings (cog-icon) -> Export and Import -> Restore from ZIP`)

### Einrichten des Fulfillment

TBD

## Inspiration

Wegen der Häufung von Anrufen bei Hotlines und Ärzte:innen zu allgemeinen Fragestellung, deren Antworten auf den Webseiten von BMG, RKI und WHO versteckt sind, laufen wir Gefahr, dass die individuelle Kommunikation beispielsweise bei Fallabklärung und Quarantänebetreuung nicht mehr durchgeführt werden kann. Hierbei geht es so wohl um überlastete Personen im Gesundheitssystem aber auch um nicht automatisch skalierbare IT-Systeme.

## Was macht diese Projekt

Dieser Assistent beantwortet häufig gestellte Fragen mit ca. 35 ausführlichen, vorgefertigten Antworten aus vertrauenswürdigen Quellen. Du kannst darüber hinaus das Coronavirus Management nutzen, um durch Fallabklärung und Quarantänebetreuung das Gesundheitswesen zu unterstützen. Siehe auch <https://www.bundesgesundheitsministerium.de/coronavirus.html>

## Wie wurde er gebaut

## Welche Herausvorderungen haben sich uns gestellt

Der Aufwand, der damit einher geht, alle möglichen Antworten der Nutzer:innen abzudecken, benötigt viel Zeit und Manpower. Des Weiteren stellen sich vor allem bei der Quarantänebetreuung datenschutzrechtliche Herausforderungen. Damit einher geht die Frage, wie eine datenschutzkonforme Übermittlung der erfassten Daten (Temperatur, gesundheitlicher Zustand,...) konkret umgesetzt werden kann. Dabei muss spezieller Augenmerk darauf gerichtet werden, dass dies möglichst nicht zu Lasten der Bedienbarkeit geht.

## Darauf sind wir stolz

* Einrichtung einer umfangreichen FAQ Sammlung inklusive Weiterleitung der Nutzer:innen auf Seiten des BGM für weitere Informationen zur Vermittlung von offiziellen, aktuellen Informationen.
* Einrichtung einer Fallabklärung, welche die Nutzer:innen nach Leitlinien des RKI dabei unterstützt, festzustellen, ob sie möglicherweise mit SARS-CoV-2 infiziert sind. Anschließende Weiterleitung der Nutzer:innen an offizielle Stellen bei Infektionsverdacht.

## Was haben wir gelernt

* Wie es gelingt unter 20.000 Menschen ein Team von fünf Teilnehmern zu finden
* Nutzung von Google Dialogflow zur Erstellung eines Chatbots.

## Was kommt als nächstes

TBD

## Resourcen für Entwickler

DialogFlow Dokumentation: <https://cloud.google.com/dialogflow/docs?hl=de>
Konzepte: <https://cloud.google.com/dialogflow/docs/concepts?hl=de>
Contexte und Fulfillment: <https://cloud.google.com/dialogflow/docs/contexts-fulfillment?hl=de>
