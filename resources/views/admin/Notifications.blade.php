

@if (Session::has('success'))
<div class="notifications">
    <div class="notify gr">
      <div class="circle">
       <i class="fa-solid fa-circle-check icon-noti"></i>
      </div>
      <div class="info">
        <span style="    padding-top: 16px;">  {{ session('success') }}</span>
      </div>
    </div>

  </div>
@elseif(Session::has('failed'))
<div class="notifications">
    <div class="notify gr">
      <div class="circle">
       <i class="fa-solid fa-circle-xmark icon-failed"></i>
      </div>
      <div class="info">
        <span style="   padding-top: 16px; font-size: 1rem;"> {{ session('failed') }}</span>
      </div>
    </div>

  </div>
@endif

<style>
  .notifications {
  position: fixed;
  top: 20px;
  right: 20px;
  z-index: 9999;
}

.notify {
  display: flex;
  align-items: center;
  background-color: #e6e6e6;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  color: #333;
  padding: 15px;
  margin-bottom: 10px;
  opacity: 1;
  transition: opacity 0.3s ease;
}

.notify .circle {
  margin-right: 10px;
}

.notify .icon-noti {
  color: #41c98e;
}

.notify .icon-failed {
  color: #f55f5f;
}

.notify .info {
  flex: 1;
}

.notify span {
  font-size: 14px;
  font-weight: bold;
  padding-top: 10px;
}

.notify.close {
  opacity: 0;
  height: 0;
  padding: 0;
}

.notify.close .circle {
  display: none;
}

</style>

<script>
  const notifications = document.querySelectorAll('.notifications .notify');

notifications.forEach(notification => {
  notification.addEventListener('click', () => {
    notification.classList.add('close');
  });

  setTimeout(() => {
    notification.classList.add('close');
  }, 3000);
});

</script>

