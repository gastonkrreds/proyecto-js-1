$(document).ready(function(){
    
    // Slider

    $('.bxslider').bxSlider({
        mode: 'fade',
        captions: true,
        slideWidth: 1200,
        responsive: true,

    });

    // Posts
    var posts = [
        {
            title: "Prueba del titulo 1",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM")+ " de " + moment().format("YYYY"),
            content: "asjndjkasjdanjsdknajsdn jaksndjasn djans djaknsdja nsdjna sjnda jksndaj sndjkas djansjdkn asjdjan"
        },
        {
            title: "Prueba del titulo 2",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM")+ " de " + moment().format("YYYY"),
            content: "asjndjkasjdanjsdknajsdn jaksndjasn djans djaknsdja nsdjna sjnda jksndaj sndjkas djansjdkn asjdjan"
        },
        {
            title: "Prueba del titulo 3",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM")+ " de " + moment().format("YYYY"),
            content: "asjndjkasjdanjsdknajsdn jaksndjasn djans djaknsdja nsdjna sjnda jksndaj sndjkas djansjdkn asjdjan"
        },
        {
            title: "Prueba del titulo 4",
            date: "Publicado el día " + moment().date() + " de " + moment().format("MMMM")+ " de " + moment().format("YYYY"),
            content: "asjndjkasjdanjsdknajsdn jaksndjasn djans djaknsdja nsdjna sjnda jksndaj sndjkas djansjdkn asjdjan"
        },
    ]
    

    posts.forEach((item, index) => {
        var post = `
            <article class="post">
                    <h2>${item.title}</h2>
                    <span class="date">${item.date}</span>
                    <p>${item.content}</p>
                    <a href="" class="button-more">Leer más</a>
                </article>
            `;
            $("#posts").append(post);
        });

    // Selector de tema
    var theme = $("#theme");

    $("#to-white").click(function(){
        theme.attr("href","css/white-theme.css")
    });
    $("#to-dark").click(function(){
        theme.attr("href","css/dark-theme.css")
    });
});