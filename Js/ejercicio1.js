document.addEventListener("DOMContentLoaded", function () {
    function crearProyectoTabla() {
        var tabla = document.createElement("tabla");
        var tabla = document.createElement("tabla");

        
        var tituloRow = document.createElement("tr");
        var titulocentral = document.createElement("td");
        titulocentral.colSpan = 3;
        titulocentral.innerHTML = "<strong>15 + Web Design Projects with Source Code..!</strong>";
        var hr = document.createElement("hr");
        
        tituloRow.appendChild(titulocentral);
        tabla.appendChild(tituloRow);
        tabla.appendChild(hr);
        
        
        var proyecto = [
            { name: "Facebook", image: "https://i.postimg.cc/HW8KbtxW/Screen-of-Facebook-2.png" },
            { name: "Disney plus", image: "https://i.postimg.cc/9fz1CWwX/disneyplus-login.jpg" },
            { name: "Star plus", image: "https://i.postimg.cc/63nrpTWK/star-plus-planes.png" },
            { name: "Netflix", image: "https://i.postimg.cc/3NZbWt83/1-2-In-Z9d-Vyb4004h7-AOf0-Vm-Q.png" },
            { name: "Youtube", image: "https://i.postimg.cc/1RKWGYSQ/NSw-itch-DS-You-Tube-02-en-GB.jpg" },
            { name: "Amazon prime", image: "https://i.postimg.cc/nL8Ybvx2/Prime-Video-UI-Top-10.webp" }
        ];
        
        for (var i = 0; i < proyecto.length; i += 3) {
            var row = document.createElement("tr");
            for (var j = i; j < i + 3 && j < proyecto.length; j++) {
                var cell = document.createElement("td");
                
                var img = document.createElement("img");
                img.src = proyecto[j].image;
                img.alt = proyecto[j].name;
        
                var botoncodigofuente = document.createElement("input");
                botoncodigofuente.type = "button";
                botoncodigofuente.value = "Source Code";
        
                var botondevistaprevia = document.createElement("input");
                botondevistaprevia.type = "button";
                botondevistaprevia.value = "Preview Demo";
        
                cell.appendChild(img);
                cell.appendChild(document.createElement("br"));
                cell.appendChild(document.createTextNode(proyecto[j].name));
                cell.appendChild(botoncodigofuente);
                cell.appendChild(botondevistaprevia);
        
                row.appendChild(cell);
            }
            tabla.appendChild(row);
        }
        
        
        tabla.style.borderCollapse = "separate";
        tabla.style.borderSpacing = "10px";
        
     
        document.body.appendChild(tabla);
        
        document.body.appendChild(tabla);
    }

    crearProyectoTabla();
});
