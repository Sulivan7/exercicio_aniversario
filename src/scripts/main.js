AOS.init();

const dataDoEvento = new Date("dec 12, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteOEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMS = 1000 * 60 * 60 * 24;
    const horaEmMS = 1000 * 60 * 60;
    const MinutoEmMS = 1000 * 60;
    
    const diasAteOEvento = Math.floor(distanciaAteOEvento / diaEmMS);
    const HorasAteOEvento = Math.floor((distanciaAteOEvento % diaEmMS) / horaEmMS);
    const MinutosAteOEvento = Math.floor((distanciaAteOEvento % horaEmMS) / MinutoEmMS);
    const segundosAteOEvento = Math.floor((distanciaAteOEvento % MinutoEmMS) / 1000);

    document.getElementById('contador').innerHTML = `${diasAteOEvento}d ${HorasAteOEvento}h ${MinutosAteOEvento}m ${segundosAteOEvento}s`;

    if (distanciaAteOEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Que pena já acabou!';
    }
}, 1000);