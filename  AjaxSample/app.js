let ajax = new XMLHttpRequest();
ajax.open('GET', 'https://h2o-space.com/htmlbook/images.php');
ajax.responseType = 'json';
ajax.send(null);

ajax.onreadystatechange = function () {
    if (ajax.readyState === XMLHttpRequest.DONE && ajax.status === 200) {
        for (let i = 0; i < this.response.length; i++) {

            let data = this.response[i];
            img = document.createElement('img');
            img.setAttribute('src', data.path);

            caption = document.createElement('div');
            caption.className = 'inner';
            caption.innerHTML = '<p>' + data.caption + '<span>' + data.name + '</span></p>';

            div = document.createElement('div');
            div.className = 'photo';
            div.appendChild(img);
            div.appendChild(caption);

            document.getElementById('img_unit').appendChild(div);

        }
    }
};