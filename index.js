function iniciarGrilla(karaokes){

    let data = karaokes.map(k=>[k]);
    new gridjs.Grid({
        columns: ["Karaoke"],
        data: data,
        search: true,
        language: gridjs.l10n.esES,
        pagination: {
            limit: 20,
            summary: false
          }
      }).render(document.getElementById("wrapper"));
}

iniciarGrilla(window.karaokes);
