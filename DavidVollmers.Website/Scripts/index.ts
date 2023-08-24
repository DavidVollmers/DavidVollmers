import LottiePlayer from 'lottie-web';

(<any>window).playAnimation = function (element: HTMLElement, path: string): void {
    LottiePlayer.loadAnimation({
        container: element,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: path
    });
};
