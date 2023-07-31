

<section class="slider_slick" style="position: relative;">
    <div class="slider-img" style="padding: 0;">
        <div class="slide-auto-slider">
            @isset($SimpleSlider)
            @foreach ( $SimpleSlider as  $SimpleSlider => $SimpleSliderItem)
                @foreach ( $SimpleSliderItem as  $key => $value)
               <img class="img-sli" src="{{ asset($value->image)}}" alt="{{ $value->tittle }}">
                 @endforeach
            @endforeach
        @endisset
        </div>
    </div>
</section>
