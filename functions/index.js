// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';

const version = 'Version 47.07';

const faqBFG = [
    {
        "Timestamp": "3/11/2020 2:23:00",
        "Id": "FAQ_BFG_001",
        "Intent": "FAQ_BFG_001 Wofür stehen die Abkürzungen",
        "Question": "Wofür stehen SARS-CoV-2 und Covid-19?",
        "Answer": "Seit dem 11. Februar hat das neuartige Coronavirus, das zunächst vorläufig mit 2019-nCoV bezeichnet wurde, einen neuen Namen: SARS-CoV-2. Das Akronym SARS steht dabei für Schweres Akutes Atemwegssyndrom. Der Name weist auf die enge Verwandtschaft zum SARS-Coronavirus hin, das 2002/2003 eine Epidemie ausgelöst hatte.\n\nAuch die Lungenkrankheit, die durch SARS-CoV-2 ausgelöst werden kann, hat einen neuen Namen erhalten. Sie wird nun Covid-19 (Corona Virus Disease 2019) genannt.",
        "Date": "3/11/20",
        "Time": "12:24:00 PM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_002",
        "Intent": "Frage würde gelöscht.",
        "Question": "Frage würde gelöscht.",
        "Answer": "Anwort wurde gelöscht.",
        "Date": "3/6/20",
        "Time": "5:43:00 PM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_003",
        "Intent": "FAQ_BFG_003 Deutschland Vorbereitung",
        "Question": "Wie ist Deutschland vorbereitet?",
        "Answer": "Deutschland ist bestmöglich vorbereitet. Vor allem das Netzwerk von Kompetenzzentren und Spezialkliniken in Deutschland ist international beispiellos. Wir verfügen über ein sehr gutes Krankheitswarn- und Meldesystem und Pandemiepläne. Außerdem werden in Deutschland regelmäßige Notfallübungen an Flughäfen durchgeführt. Die Koordinierung und Informationen übernimmt das Robert Koch-Institut.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_004",
        "Intent": "FAQ_BFG_004 Vorkehrungen in Deutschland",
        "Question": "Welche weiteren Vorkehrungen wurden getroffen, um die Bevölkerung in Deutschland vor dem neuen Coronavirus SARS-CoV-2 zu schützen?",
        "Answer": "Dem Robert Koch-Institut wurden erweiterte Befugnisse bei der Koordinierung von Maßnahmen mit den Bundesländern eingeräumt.\n\nUnter den Gesundheitsministern in der EU finden regelmäßige  Abstimmungen statt, um ein möglichst einheitliches Vorgehen zu gewährleisten.\n\nUm Verdachtsfälle möglichst früh zu erkennen, wurden Ärzte, Kliniken und Labore verpflichtet, auch begründete Verdachtsfälle zu melden (CoronaVMeldeV).\n\nAbhängig von der Risikoeinschätzung für Deutschland werden fortlaufend weitere mögliche Maßnahmen geprüft.\n\nMit einer außerplanmäßigen Ausgabe in Höhe von bis zu 23 Mio. EUR  sollen u.a. Maßnahmen im Zusammenhang mit der Repatriierung, der Ausbruchsbekämpfung durch das RKI und der Forschungsförderung sowie Maßnahmen der Risikokommunikation finanziert werden.",
        "Date": "3/11/20",
        "Time": "12:08:00 PM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_005",
        "Intent": "FAQ_BFG_005 Vorkehrungen Flugreisende China",
        "Question": "Welche Vorkehrungen wurden für Reisende getroffen, die aus Risikogebieten in Deutschland ankommen?",
        "Answer": "Beförderer von Reisenden, die per Flugzeug, Schiff, Bahn oder Bus aus China, dem Iran, Italien, Japan, Südkorea nach Deutschland einreisen, müssen ihren Passagieren Verhaltenshinweise zur Krankheitsvorbeugung, bzw. für den Fall, dass Krankheitssymptome auftauchen, aushändigen.\nGleiches gilt für alle Betreiber von Flughäfen, Häfen, Personenbahnhöfen und Omnibusbahnhöfen.\nLuftfahrzeugführer haben bei Flügen aus dem Iran, Italien, Japan, Südkorea, oder China vor der Landung in Deutschland die allgemeine Erklärung für Luftfahrzeuge, Abschnitt Gesundheit den Behörden zu übergeben.\nReisende, die per Flugzeug oder Schiff aus dem Iran, Italien, Japan oder Südkorea in Deutschland einreisen, müssen vor Verlassen des Flugzeuges oder Schiffs Angaben zu Flug/Fahrt und zur persönlichen Erreichbarkeit für die nächsten 30 Tage nach Ankunft machen. Dies erfolgt per Aussteigerkarte:\nAussteigerkarte Luftverkehr\nAussteigerkarte Schifffahrt\nReisende von China nach Deutschland müssen zusätzlich dazu Angaben zu ihrem Aufenthaltsort in China, Kontaktpersonen und gesundheitlichem Befinden machen. Dafür ist folgende Aussteigerkarte auszufüllen:\nAussteigekarten mit Selbstauskunft.\nLuftfahrtunternehmen, Reeder, Charterer und alle weiteren Personen, die für den Betrieb eines Schiffs verantwortlich sind, müssen bei Flügen und Fahrten aus dem Iran, Italien, Japan, Südkorea und China nach Deutschland die vorhandenen Daten nach Ankunft bis zu 30 Tage bereithalten.",
        "Date": "3/11/20",
        "Time": "12:06:00 PM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_006",
        "Intent": "Frage würde gelöscht.",
        "Question": "Frage würde gelöscht.",
        "Answer": "Anwort wurde gelöscht.",
        "Date": "2/29/20",
        "Time": "9:33:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_007",
        "Intent": "FAQ_BFG_007 Messen Sicherheitsvorkehrungen",
        "Question": "Müssen bei Messen besondere Sicherheitsvorkehrungen getroffen werden?",
        "Answer": "Bei Messen, Kongressen oder Veranstaltungen ist es allgemein empfehlenswert, auf Prävention von Infektionskrankheiten zu achten. Dazu zählen regelmäßige Reinigung von Oberflächen und Sanitäranlagen sowie gute Belüftung des Veranstaltungsortes. Veranstalter können Teilnehmer und Teilnehmerinnen darüber hinaus organisiert und strukturiert über allgemeine Maßnahmen des Infektionsschutzes wie Händehygiene, Abstand halten oder richtiges Husten und Niesen aufklären. Die Zuständigkeit bezüglich Veranlassung von Maßnahmen für Messen und Messebesucher obliegt den lokalen Behörden vor Ort. Das Robert Koch-Institut hat \"Allgemeine Prinzipien der Risikoeinschätzung und Handlungsempfehlungen für Großveranstaltungen\" veröffentlicht, die die lokalen Behörden bei der Entscheidung über die Absage eine Veranstaltung unterstützen sollen.\n\nDas Robert Koch-Institut empfiehlt Menschen, die an akuten respiratorischen Erkrankungen leiden, generell lieber zuhause zu bleiben - v.a. um sich selbst zu schonen, aber auch, um andere vor Ansteckung zu schützen. Diese Maßnahmen sind in erster Linie angesichts der aktuellen Grippewelle sinnvoll. Bei einer weiteren Verbreitung der Erkrankung können auch weitreichendere Maßnahmen (z.B. bestimmte Auflagen) von den zuständigen Gesundheitsämtern veranlasst werden (Kriterien für Risikoeinschätzung - RKI).",
        "Date": "3/11/20",
        "Time": "12:19:00 PM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_008",
        "Intent": "FAQ_BFG_008 Austausch mit Experten",
        "Question": "Wie erfolgt der Austausch mit anderen Experten?",
        "Answer": "Die Zusammenarbeit mit nationalen und internationalen Experten ist etabliert und funktioniert gut. Deutschland steht im ständigen und engen Kontakt mit zahlreichen Partnern, z.B. der Weltgesundheitsorganisation und den anderen EU-Ländern. Hier gibt es etablierte Netzwerke für internationale Ausbruchsgeschehen (z.B. das Health Security Committee der EU oder auch die Global Health Security Initiative der G7).\n\nAuch in der Forschung wird eng zusammengearbeitet. Über die „Coalition for Epidemic Preparedness Innovations“, kurz CEPI, wird bereits die Forschung zu einem Impfstoff koordiniert.\n\nAuf Bundesseite steht das Robert Koch-Institut als kompetenter Ansprechpartner zur Verfügung. Dort ist eine Koordinierungsstelle eingerichtet, in der die aktuelle Situation engmaschig beobachtet wird. Auch die Koordinierung und Abstimmung mit den Gesundheitsbehörden der Bundesländer findet am Robert Koch-Institut statt.",
        "Date": "3/11/20",
        "Time": "12:23:00 PM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_009",
        "Intent": "FAQ_BFG_009 Erste Information Ausbruch",
        "Question": "Wann kam die erste Information über den Ausbruch?",
        "Answer": "Am 31. Dezember 2019 wurde das WHO-Landesbüro in China über eine Häufung von Patienten mit einer Pneumonie (Lungenentzündung) unbekannter Ursache in Wuhan, einer Stadt mit 19 Millionen Einwohnern in der Provinz Hubei, China, informiert.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_010",
        "Intent": "FAQ_BFG_010 Ursprung des Ausbruchs",
        "Question": "Wo liegt der Ursprung des Ausbruchs?",
        "Answer": "Nach Angaben der chinesischen Behörden in Wuhan waren einige Patienten als Händler oder Verkäufer auf dem Huanan-Seafood-Markt in Wuhan tätig. Es ist der größte Seafood-Markt in Wuhan mit über 600 Ständen und 1.500 Arbeitern. Es wird berichtet, dass auch Wildtiere bzw. Organe von anderen Tieren und Reptilien auf dem Markt angeboten wurden. Derzeit wird davon ausgegangen, dass SARS-CoV-2 von Fledermäusen auf den Menschen übertragen wurde.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_011",
        "Intent": "FAQ_BFG_011 Virus Übertragung",
        "Question": "Wie wird das neue Virus übertragen?",
        "Answer": "Das neue Coronavirus SARS-CoV-2 ist von Mensch zu Mensch übertragbar. Der Hauptübertragungsweg ist über Tröpfchen. Die Übertragung kann direkt von Mensch-zu-Mensch über die Schleimhäute geschehen oder auch indirekt über Hände, die dann mit Mund- oder Nasenschleimhaut oder der Augenbindehaut in Kontakt kommen. Es wurden auch Fälle bekannt, in denen sich Personen bei Infizierten angesteckt haben, die nur leichte oder unspezifische Krankheitszeichen gezeigt hatten. Der Anteil an asymptomatischen Fällen ist nicht klar, nach Angaben der WHO und Daten aus China spielen diese Fälle bei der Verbreitung von SARS-CoV-2 jedoch keine große Rolle.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_012",
        "Intent": "FAQ_BFG_012 Dauer Erkrankung nach Ansteckung",
        "Question": "Wie lange dauert es, bis die Erkrankung nach Ansteckung ausbricht?",
        "Answer": "Derzeit wird davon ausgegangen, dass es nach einer Ansteckung bis zu 14 Tage dauern kann, bis Symptome auftreten. Im Durchschnitt beträgt die Inkubationszeit laut WHO fünf bis sechs Tage.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_013",
        "Intent": "FAQ_BFG_013 Krankheitszeichen durch Coronavirus",
        "Question": "Was ist bei einem Corona-Verdacht zu tun, welche Symptome gibt es?",
        "Answer": "Personen, die persönlichen Kontakt zu einer Person hatten, bei der SARS-CoV-2 nachgewiesen wurde, sollten sich unverzüglich und unabhängig von Symptomen mit dem zuständigen Gesundheitsamt in Verbindung setzen, einen Arzt kontaktieren oder die 116117 anrufen - und zu Hause bleiben.\r\nEine Corona-Infektion äußert sich durch grippeähnliche Symptome, wie trockener Husten, Fieber, Schnupfen und Abgeschlagenheit. Auch über Atemprobleme, Halskratzen, Kopf- und Gliederschmerzen, Übelkeit, Durchfall sowie Schüttelfrost wurde berichtet.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_014",
        "Intent": "FAQ_BFG_014 Wie schützen",
        "Question": "Wie schütze ich mich vor dem Coronavirus?",
        "Answer": "Die Verhaltensweisen sind mit denen zum Schutz vor Grippeviren identisch:\nRegelmäßiges und gründliches Händewaschen, richtiges Husten und Niesen sowie Abstand zu Erkrankten halten – das sind die effektivsten Schutzmaßnahmen im Alltag. Auch Händeschütteln sollte unterlassen werden.\nWenn die Möglichkeit besteht, sollte auf Reisen verzichtet, öffentliche Verkehrsmittel gemieden und von zu Hause aus gearbeitet werden. Im Allgemeinen sollten jegliche Kontakte reduziert werden.\nVon einem Besuch einer Veranstaltung mit mehr als 1000 Menschen ist generell abzuraten.\nBürger und Bürgerinnen, die älter als 60 Jahre sind, sollten sich gegen Pneumokokken impfen lassen.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_015",
        "Intent": "FAQ_BFG_015 Tragen Mund-Nasen-Schutzes",
        "Question": "Ist das Tragen eines Mund-Nasen-Schutzes sinnvoll?",
        "Answer": "Für Personen mit einer akuten Atemwegserkrankung kann das Tragen eines Mund-Nasen-Schutzes sinnvoll sein, um das Risiko einer Ansteckung anderer Personen zu verringern.\nHingegen gibt es keine hinreichenden Beweise dafür, dass das Tragen eines Mund-Nasen-Schutzes das Risiko einer Ansteckung für eine gesunde Person verringert. Menschen, die an einer Atemwegserkrankung leiden, sollten nach Möglichkeit zu Hause bleiben.\nDavon unbenommen sind die Empfehlungen zum Tragen von Atemschutzmasken durch das medizinische Personal im Sinne des Arbeitsschutzes.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_016",
        "Intent": "FAQ_BFG_016 Personen Regionen Rückkehrer",
        "Question": "Wie verhalte ich mich nach einer Auslandsreise richtig?",
        "Answer": "Personen, die sich in einem vom Robert Koch-Institut ausgewiesenen Risikogebiet aufgehalten haben oder in Regionen, in denen COVID-19-Fälle vorkommen, sollten unnötige Kontakte vermeiden und wenn möglich zu Hause bleiben. Entwickeln sich innerhalb von 14 Tagen Symptome, sollte - nach telefonischer Anmeldung – ein Arzt aufgesucht werden.\r\n\r\nReisende aus dem Iran, Italien, Japan oder Südkorea in Deutschland müssen u.a. Angaben zu ihrer Erreichbarkeit für die nächsten 30 Tage machen. Reisende von China nach Deutschland geben zudem eine erweiterte Selbstauskunft ab.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_017",
        "Intent": "Frage würde gelöscht.",
        "Question": "Frage würde gelöscht.",
        "Answer": "Anwort wurde gelöscht.",
        "Date": "2/29/20",
        "Time": "9:33:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_018",
        "Intent": "FAQ_BFG_018 Personen unter Quarantäne",
        "Question": "Was sollten Personen tun, die vor kurzem an einem Ort waren, der jetzt unter Quarantäne steht?",
        "Answer": "Um die Weiterverbreitung von COVID-19 bestmöglich zu verhindern, ordnen Behörden verschiedener betroffener Staaten an, dass Hotels, Schiffe, Orte, aber auch ganze Regionen für eine gewisse Zeit  unter  Quarantäne gestellt werden. Dies muss kein Anzeichen dafür sein, dass es dort zu Übertragungen gekommen ist.  Oftmals handelt es sich um einen Vorsichtsmaßnahme, die nach Ausschluss eines Verdachts schnell wieder aufgehoben wird. Wer davon erfährt, dass ein Ort, an dem er sich kürzlich aufgehalten hat, unter Quarantäne gestellt wurde, sollte sich zunächst über die Medien informieren, aus welchem Grund und für wie lange die Quarantäne verhängt wurde. Oft besteht kein Grund zur Sorge, z.B., wenn der Erkrankte erst angereist ist, nachdem man selbst schon abgereist war  oder der eigene Aufenthalt schon 14 Tage oder länger her ist, ohne dass man Symptome  entwickelt hat. Wenn weiterhin die Sorge besteht, dass eine Ansteckung stattgefunden haben könnte, kann man sich an sein zuständiges Gesundheitsamt wenden. Dieses kann das individuelle Risiko weiter eingrenzen und ggf. Vorsichtsmaßnahmen empfehlen. Wer unter Symptomen leidet, sollte - nach telefonischer Vorankündigung und mit Verweis auf den unter Quarantäne stehenden Ort einen Arzt aufsuchen. Eine weitere Abklärung kann je nach Schwere der Symptome auch ohne Krankenhausaufnahme erfolgen.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_019",
        "Intent": "FAQ_BFG_019 Ärzte Kliniken Informationen",
        "Question": "Wo erhalten Ärzte und Kliniken weitere Informationen?",
        "Answer": "Das Robert Koch-Institut stellt im Internet Informationen für die Fachöffentlichkeit bereit. Hier findet sich unter anderem ein Flussschema als Orientierungshilfe für Ärzte für die Verdachtsabklärung und Maßnahmen sowie Empfehlungen zu Hygienemaßnahmen im Rahmen der Behandlung von Patienten mit einer Infektion durch SARS-CoV-2.\n",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_020",
        "Intent": "FAQ_BFG_020 Impfung",
        "Question": "Gibt es eine Impfung?",
        "Answer": "Es wird an der Entwicklung eines Impfstoffes gearbeitet. Bisher ist aber keine Schutzimpfung verfügbar.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_021",
        "Intent": "FAQ_BFG_021 Therapie",
        "Question": "Welche Therapiemöglichkeiten gibt es?",
        "Answer": "Nicht alle Erkrankungen nach Infektion mit SARS-CoV-2 verlaufen schwer und müssen therapiert werden, auch bei den meisten in China berichteten Fällen war der Krankheitsverlauf mild.  Die Behandlung der Infektion richtet sich nach der Schwere des Krankheitsbildes (z.B. Sauerstoffgabe, Ausgleich des Flüssigkeitshaushalts, ggf. Antibiotikagabe zur Behandlung von bakteriellen Begleitinfektionen) und umfasst auch die Behandlung von relevanten Grunderkrankungen. Eine spezifische, d.h. gegen das neuartige Coronavirus selbst gerichtete Therapie steht derzeit noch nicht zur Verfügung.\r\n",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_022",
        "Intent": "FAQ_BFG_022 Risikogebiete",
        "Question": "Welche Gebiete sind als Risikogebiete anzusehen?",
        "Answer": "Derzeit (Stand: 10.03.2020) sind durch das Robert Koch-Institut folgende Risikogebiete definiert:\r\nItalien\r\nIran\r\nIn China: Provinz Hubei (inkl. Stadt Wuhan)\r\nIn Südkorea: Provinz Gyeongsangbuk-do (Nord-Gyeongsang)\r\nDiese Definition wird permanent basierend auf der aktuellen Lage angepasst.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_023",
        "Intent": "FAQ_BFG_023 Reisende Risikogebiete",
        "Question": "Was sind die Empfehlungen für Reisende in Gebiete, in denen es zu Übertragungen kommt?",
        "Answer": "Die aktuellen Reise- und Sicherheitshinweise können auf der den entsprechenden Webseiten des Auswärtigen Amtes eingesehen werden:\nChina | Iran | Italien | Südkorea\nDarüber hinaus wurden durch das Auswärtige Amt auch allgemeine Informationen bezüglich Covid-19 für Reisende erstellt.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_024",
        "Intent": "FAQ_BFG_024 Ähnliche Ausbrüche",
        "Question": "Gab es bereits ähnliche Ausbrüche?",
        "Answer": "Bei dem neuen Virus handelt es sich um einen Erreger aus der Familie der Coronaviren, also aus derselben Familie wie das SARS (severe acute respiratory syndrome) und das MERS-CoVirus (Middle East Respiratory Syndrome Coronavirus).\r\nIn Deutschland gab es im Jahr 2003 neun wahrscheinliche SARS-Fälle, wovon letztlich vier Patientenproben negativ waren. Eine Weiterverbreitung der Erkrankung innerhalb Deutschlands ist nicht aufgetreten.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_025",
        "Intent": "FAQ_BFG_025 Gefahr Import Lebensmittel",
        "Question": "Besteht die Gefahr, sich über importierte Lebensmittel, Oberflächen oder Gegenstände mit dem neuartigen Coronavirus (SARS-CoV-2) anzustecken?",
        "Answer": "Eine Übertragung über unbelebte Oberflächen ist bisher nicht dokumentiert. Eine Infektion mit SARS-CoV-2 über Oberflächen, die nicht zur direkten Umgebung eines symptomatischen Patienten gehören, wie z.B. importierte Waren, Postsendungen oder Gepäck, erscheint daher unwahrscheinlich. Generell ist das gründliche Händewaschen, wie es von der Bundeszentrale für gesundheitliche Aufklärung (BZgA) empfohlen wird, ein wichtiger Bestandteil der persönlichen Hygiene und kann vor einer Vielzahl weiterer Infektionen wie z.B. Magen-Darm Erkrankungen schützen.\n\nDie Bewertung des Risikos von Lebensmitteln oder Gegenständen fällt  in den Zuständigkeitsbereich des Bundesinstituts für Risikobewertung (BfR), für das Thema Arbeitsschutz ist die Bundesanstalt für Arbeitsschutz und Arbeitsmedizin (BAuA) verantwortlich.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_026",
        "Intent": "FAQ_BFG_026 Gefährlichkeit Infektion",
        "Question": "Wie gefährlich ist eine Infektion mit SARS-CoV-2?",
        "Answer": "Bei den bisher hauptsächlich aus China berichteten Fällen verliefen vier von fünf Infektionen mild. Bei einem Teil der Patienten kann das Virus zu einem schwereren Verlauf mit Atemproblemen und zu Lungenentzündung führen. Todesfälle traten bisher vor allem bei Patienten auf, die älter waren und/oder bereits zuvor an chronischen Grunderkrankungen litten.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_027",
        "Intent": "FAQ_BFG_027 Zahlung Krankenkasse Test",
        "Question": "Zahlt die Krankenkasse den Test auf SARS-CoV-2?",
        "Answer": "Seit dem 28. Februar 2020 übernehmen die Krankenkassen die Testung auf das Coronavirus in einem weiten Umfang. Voraussetzung hierfür ist die Entscheidung des Arztes, ob eine Patientin, ein Patient getestet werden soll oder nicht.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_028",
        "Intent": "FAQ_BFG_028 Maßnahmen Bahnreisende",
        "Question": "Gibt es Maßnahmen für Bahnreisende?",
        "Answer": "Zusätzlich zu den Maßnahmen für Reisende aus den besonders betroffenen Ländern (siehe oben) gilt folgende Allgemeinverfügung der Bundespolizei:\nIm öffentlichen Personenfern- und Regionalverkehr tätige Bahnunternehmen müssen COVID-19-Verdachtsfälle unverzüglich dem Führungs- und Lagedienst der Bundespolizei melden. Kontaktdaten und Informationen zum Aufbau der Meldung sind in der Allgemeinverfügung aufgeführt.\nTritt ein Verdachtsfall auf, müssen Reisende in diesem Zug die \"Aussteigerkarte Bahnverkehr\" ausfüllen. Diese werden den Reisenden im Bedarfsfall ausgehändigt.",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_029",
        "Intent": "FAQ_BFG_029 Schnelltest",
        "Question": "Gibt es einen Schnelltest auf SARS-CoV-2 zur Durchführung zu Hause?",
        "Answer": "Ein Schnelltest, mit dem eine Bestätigung der Infektion mit dem neuartigen Coronavirus SARS-CoV-2 eigenhändig durchgeführt werden kann, in etwa analog zu einem Schwangerschaftstest, existiert nicht. Personen, die den Verdacht haben, sich mit SARS-CoV-2 infiziert zu haben, sollten (nach telefonischer Anmeldung) ihre Ärztin bzw. ihren Arzt aufsuchen, die dann eine Labordiagnostik veranlassen können.\n",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_030",
        "Intent": "FAQ_BFG_030 Hotlines",
        "Question": "Hotlines zum Coronavirus",
        "Answer": "Wenden Sie sich telefonisch an Ihren Hausarzt oder wählen Sie die 116117 - die Nummer des ärztlichen Bereitschaftsdienstes-, wenn Sie die Sorge haben, sich mit dem Coronavirus infiziert zu haben.\r\nHier finden Sie eine weitere Auswahl von Hotlines, die bundesweit zum Thema Coronavirus informieren.\r\n\r\nUnabhängige Patientenberatung Deutschland - 0800 011 77 22\r\n\r\nBundesministerium für Gesundheit (Bürgertelefon) - 030 346 465 100\r\n\r\nAllgemeine Erstinformation und Kontaktvermittlung - Behördennummer 115 (www.115.de)\r\n\r\nBeratungsservice für Gehörlose und Hörgeschädigte - Fax: 030 / 340 60 66 – 07 info.deaf@bmg.bund(dot)de / info.gehoerlos@bmg.bund(dot)de\r\n\r\nGebärdentelefon (Videotelefonie) -  https://www.gebaerdentelefon.de/bmg/",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:22:00",
        "Id": "FAQ_BFG_031",
        "Intent": "FAQ_BFG_031 Ärzte Klinikpersonal zu beachten",
        "Question": "Was ist für Ärzte und Klinikpersonal zu beachten? ",
        "Answer": "Um Verdachtsfälle möglichst früh zu erkennen, wurden Ärzte, Kliniken und Labore verpflichtet, auch begründete Verdachtsfälle zu melden (CoronaVMeldeV).\nDas Robert Koch-Institut stellt im Internet Informationen für die Fachöffentlichkeit bereit. Hier findet sich unter anderem ein Flussschema als Orientierungshilfe für Ärzte für die Verdachtsabklärung und Maßnahmen sowie Empfehlungen zu Hygienemaßnahmen im Rahmen der Behandlung von Patienten mit einer Infektion durch SARS-CoV-2.\n",
        "Date": "3/11/20",
        "Time": "12:40:00 AM"
    },
    {
        "Timestamp": "3/11/2020 2:29:50",
        "Id": "FAQ_BFG_032",
        "Intent": "FAQ_BFG_032 Krankschreibung",
        "Question": "Muss ich mit leichten Atemwegserkrankungen für eine Krankschreibung in die Arztpraxis gehen?",
        "Answer": "Ab sofort können Patienten mit leichten Erkrankungen der oberen Atemwege nach telefonischer Rücksprache mit ihrem Arzt eine Bescheinigung auf Arbeitsunfähigkeit (AU) bis maximal sieben Tage ausgestellt bekommen. Sie müssen dafür nicht die Arztpraxen aufsuchen. Diese Vereinbarung gilt seit 9. März 2020 und zunächst für vier Wochen.",
        "Date": "3/11/20",
        "Time": "2:29:00 AM"
    }
];

const functions = require('firebase-functions');
const { WebhookClient, Card, Suggestion, LinkOutSuggestion, Payload } = require('dialogflow-fulfillment');
const { SignIn, Suggestions } = require('actions-on-google');

const clientId = '<client-id-here>';
const { OAuth2Client } = require('google-auth-library');
const client = new OAuth2Client(clientId);

const moment = require('moment');

process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements

exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));

    // **************************************************
    // Standard Functions Debug
    // **************************************************
    function std_dbg(agent) {
        agent.add(`${version}`);
    }

    // **************************************************
    // Standard Functions Account - Login
    // **************************************************
    function std_sii(agent) {
        console.log(`std_sii: start`);
        let conv = agent.conv(); // Get Actions on Google library conv instance
        conv.ask(new SignIn(`Du hast die Anmeldung von Coronavirus Management aufgerufen. Damit du die Quarantänebetreuung Funktionen nutzen kannst `));
        agent.add(conv);
        console.log(`std_sii: end`);
    }

    // **************************************************
    // Standard Functions Account - actions_intent_SIGN_IN
    // **************************************************
    async function std_sis(agent) {
        console.log(`std_sis: start`);

        let conv = agent.conv();  // Get Actions on Google library conversation object
        let signin = conv.arguments.get('SIGN_IN');

        if (signin.status === 'OK') {
            let idToken = conv.user.profile.token; // here's the token, but we don't need it
            console.log(`std_sis: token ${conv.user.profile.token}.`);

            let payload = await conv.user._verifyProfile(client, clientId);

            if (payload.name) {
                var address = payload.email.split('@');
                if (address[1] === "auro.services") {
                    conv.ask(`Du bist als ${payload.name} (${payload.email}) angemeldet und kannst die Quarantänebetreuung nutzen. Was möchtest du mich noch fragen?`);
                } else {
                    conv.ask(`Du bist als ${payload.name} (${payload.email}) angemeldet und kannst die Quarantänebetreuung nutzen. Was möchtest du mich noch fragen?`);
                }
                conv.ask(new Suggestions(`Hallo`));
                conv.ask(new Suggestions(`Über uns`));
                conv.ask(new Suggestions(`Dialog Ende`));
            }
            else {
                conv.ask(`Da ich zwar dein Google-Konto gefunden habe, aber nicht berechtigt bin, dich über dein Google-Konto zu identifizieren, kannst du die Quarantänebetreuung nicht nutzen. Was möchtest du mich noch fragen?`);
                conv.ask(new Suggestions(`Hallo`));
                conv.ask(new Suggestions(`Über uns`));
                conv.ask(new Suggestions(`Dialog Ende`));
            }
        }
        else {
            conv.ask(`Da ich nicht berechtigt bin, dich über dein Google-Konto zu identifizieren, kannst du die Quarantänebetreuung nicht nutzen. Was möchtest du mich noch fragen?`);
            conv.ask(new Suggestions(`Hallo`));
            conv.ask(new Suggestions(`Über uns`));
            conv.ask(new Suggestions(`Dialog Ende`));
        }
        agent.add(conv);
        console.log(`std_sis: end`);
    }


    function getFromSheet(agent) {
        // i.e. "FAQ_BFG_003";
        var faqId = request.body.queryResult.intent.displayName.substr(0, 11);
        const matchingFAQ = faqBFG.find(element => element.Id == faqId);

        if (!matchingFAQ) {
            console.log('FAQ id not found: ' + faqId);
            agent.add("Die Antwort auf diese Frage ist mir leider nicht bekannt.");
        }
        else {
            var faqQuestion = matchingFAQ.Question;
            var faqAnswer = matchingFAQ.Answer;
            var faqDate = matchingFAQ.Date + " " + matchingFAQ.Time;

            agent.add(faqAnswer);
            agent.add(new Card({
                title: `Wichtiger Hinweis`,
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/BMG_Logo.svg/640px-BMG_Logo.svg.png',
                text: `Diese Information stammt von der Webseite des Bundesministerium für Gesundheit vom ${faqDate} und ist unter Umständen nicht mehr aktuell. Auf Art und Umfang der von diesem Anbieter übertragenen bzw. gespeicherten Daten hat AuRo keinen Einfluss. Siehe: ${faqQuestion}`,
                buttonText: 'Bundesministerium',
                buttonUrl: 'https://www.bundesgesundheitsministerium.de/coronavirus.html'
            })
            );
        }

        agent.add(`Was magst du mich noch fragen?`);
        agent.add(new Suggestion(`Hallo`));
        agent.add(new Suggestion(`Quellen`));
        agent.add(new Suggestion(`Über uns`));
        agent.add(new Suggestion(`Dialog Ende`));
    }

    function infectionDateHandler(agent) {
        const daysSick = agent.parameters.Tage;
        var today = new Date();
        var periodDays = 14 + daysSick;
        var infectionDate = new Date(new Date().setDate(today.getDate() - periodDays));
        var agentLocaleMoment = moment(infectionDate).locale(agent.locale);

        var infectionDateWeekdayParameter = agentLocaleMoment.format('dddd');
        var infectionDateParameter = agentLocaleMoment.format('DD.MM.YYYY');

        agent.context.set(
            {
                name: 'coronavirusmanagement-fallabklaerung-krank-tage-followup',
                lifespan: 2,
                parameters: {
                    erkrankungsDatum: infectionDateParameter,
                    wochentag: infectionDateWeekdayParameter,
                    zeitraum: periodDays
                }
            });

        agent.add(`Ok, dann betrachten wir rückwirkend einen Zeitraum von ${periodDays} Tagen. Hattest du seit ${infectionDateWeekdayParameter}, den ${infectionDateParameter}, Kontakt zu bestätigten Coronavirus Fällen?`);
        agent.add(new Suggestion(`Ja`));
        agent.add(new Suggestion(`Nein`));
        agent.add(new Suggestion(`Dialog Ende`));
    }

    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('STD-DBG', std_dbg); // Debug
    intentMap.set('STD-SII', std_sii); // Instruction Intent
    intentMap.set('STD-SIS', std_sis); // Instruction Start
    intentMap.set('Coronavirus Management - Fallabklaerung - Krank - Tage', infectionDateHandler);
    intentMap.set(null, getFromSheet);
    agent.handleRequest(intentMap);
});
