import { Component, Input, forwardRef } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { SliderModule, Slider, DomHandler, SLIDER_VALUE_ACCESSOR } from 'primeng/primeng'

import { MusicPlayerService } from './../music-player.service'

export const MY_SLIDER_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => SliderUIComponent),
    multi: true
}

/**
 * HACK: Spectre の slider を使いたいけど、実装は PrimeNG のを使ったので、PrimeNG の Slider クラスを継承してスタイルだけ書き換えてる
 */
@Component({
    selector: 'app-ui-slider',
    template: `
    <div class="bar bar-slider" (click)="onBarClick($event)">
        <div class="bar-item" role="progressbar" [ngStyle]="{'width': handleValue + '%'}">
            <button class="bar-slider-btn btn" role="slider"
            (mousedown)="onMouseDown($event)" (touchstart)="onTouchStart($event)"
            (touchmove)="onTouchMove($event)" (touchend)="dragging=false"></button>
        </div>
    </div>
    `,
    providers: [MY_SLIDER_VALUE_ACCESSOR, DomHandler],
})
export class SliderUIComponent extends Slider { }
