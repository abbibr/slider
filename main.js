let index = 1;

sliderShow(index);

function sliderShow(n)
{
    let slider = document.getElementsByClassName("myslider");
    let dot = document.getElementsByClassName("dot");

    if (n > slider.length)
    {
        index = 1;
    }
    else if (n < 1)
    {
        index = slider.length;
    }

    for (let i = 0; i < slider.length; i++)
    {
        slider[i].style.display = "none";
    }

    for (let i = 0; i < dot.length; i++)
    {
        dot[i].className = dot[i].className.replace('active','');
    }

    slider[index-1].style.display = "block";
    dot[index-1].className += " active";
}

function plusSlider(n)
{
    sliderShow(index += n);
}

function plusDot(n)
{
    sliderShow(index = n);
}