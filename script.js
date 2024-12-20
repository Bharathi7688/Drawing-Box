const canvas = document.getElementById('drawingCanvas');
        const ctx = canvas.getContext('2d');

        const colorPicker = document.getElementById('colorPicker');
        const lineWidth = document.getElementById('lineWidth');
        const clearCanvar = document.getElementById('clearCanvas');

        let drawing = false;

        ctx.strokeStyle = colorPicker.value;
        ctx.lineWidth = lineWidth.value;
        ctx.lineCap = 'round';

        colorPicker.addEventListener('input', (e) =>{
            ctx.strokeStyle = e.target.value;
        });

        lineWidth.addEventListener('input', (e)=>{
            ctx.lineWidth = e.target.value;
        });

        canvas.addEventListener('mousedown', (e) =>{
            drawing = true;
            ctx.beginPath();
            ctx.moveTo(e.offsetX,e.offsetY);
        });

        canvas.addEventListener('mousemove',(e) => {
            if(!drawing) return;
            ctx.lineTo(e.offsetX,e.offsetY);
            ctx.stroke();
        });

        canvas.addEventListener('mouseup', () =>{
            drawing = false;
        });

        canvas.addEventListener('mouseleave', () =>{
            drawing = false;
        });

        clearCanvas.addEventListener('click', () =>{
            ctx.clearRect(0,0,canvas.width, canvas.height);
        });


