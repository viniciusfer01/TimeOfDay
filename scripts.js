var now = new Date();
        var time = now.getHours();
        var hour = document.querySelector('div#hour');
        var img = document.querySelector('div#image');
        time = 5
        if (time > 12 && time < 18) //Afternoon condition 
        {
            hour.innerHTML = `<h2>It's ${time} o'clock, good afternoon!</h2>`;
            img.innerHTML = `<img src='https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/sunset-quotes-21-1586531574.jpg' 
            alt="Ilustration of the time">`
            document.body.style.background = '#FF8C00';
        }
        else if (time >= 18 || time < 5) //Night condition
        {
            hour.innerHTML = `<h2>It's ${time} o'clock, good night!</h2>`;
            img.innerHTML = `<img src='https://www.aluralingua.com.br/artigos/assets/night.jpg' 
            alt="Ilustration of the time">`
            document.body.style.background = 'midnightblue';
        }
        else //Morning condition
        {
            hour.innerHTML = `<h2>It's ${time} o'clock, good morning!</h2>`;
            img.innerHTML = `<img src="https://www.macmillandictionaryblog.com/wp-content/uploads/2018/10/daylight-810x540.jpg" 
            alt="Ilustration of the time">`
            document.body.style.background = '#e6e600';
        }