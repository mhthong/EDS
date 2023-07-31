

    @if(session('status'))
    <div class="alert alert-success">
        {{ session('status') }}
    </div>
    @endif
    <section class="panel important">
       @include('admin.setting-page')
    </section>



