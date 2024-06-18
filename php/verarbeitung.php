<?php
    // PHP ist eine serverseitige Sprache
    // Skriptsprache: 
    // Anweisungen werden Zeile für Zeile ausgeführt.
    // Programme mit falscher Syntax werden bis zu dieser
    // Zeile ausgeführt und brechen dann ggf. mit einem Error
    // ab.  
    // PHP hat einen sog. Interpreter.
    // echo: "Ausgabe" in die Rückgabe an den Browser
    // Enthält HTML-Formatierungen 
    // Jede Anweisung in PHP muss mit einem ; abgeschlossen 
    // werden
    echo "<h1>Hallo</h1>";
    
    // Systemumgebungsvariablen
    // $_GET: Liste von Argumenten aus dem Formular 
    // über die GET-Methode
    // $_POST: Liste von Argumenten aus dem Formular
    // über die POST-Methode
    // Bei der POST-Methode erfolgt die Übermittlung über den HTTP
    // Request 
    // Liste der Zuordnung
    // von id des Formularfeldes zu dem Wert
    // 'name' : 'Hofmann'
    // 'vn' : 'Matthias'
    // Ausgaben können mit einem . verkettet werden. 
    echo $_GET['name'] . '<br>';
    echo $_GET['vn'] . '<br>';
    echo $_GET['anschrift'] . '<br>';
    echo $_GET['geb'] . '<br>';
    // Es werden alle Informationen zu der aktuellen
    // PHP Installation abgerufen
    // Diese phpinfo() - Funktion generiert
    // HTML-Code und der Server schickt diesen an den
    // Client zurück
    phpinfo();
?>