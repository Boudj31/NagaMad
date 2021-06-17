<template>
  <div class="search-annonce">
    <div class="annonce-box">
      <div class="annonce-icon">
        <img
          src="../../assets/plastic-bottle.svg"
          alt="Plastique"
        />
      </div>
      <div class="annonce-content">
        <strong>Lorem ipsum dolor sit.</strong>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          deserunt iste quo laudantium corporis neque, rem alias quam incidunt
          laborum unde a nobis quisquam omnis in quos architecto eos itaque?
        </p>
      </div>
    </div>
    <div class="annonce-box">
      <div class="annonce-icon">
        <img
          src="../../assets/delivery-truck.svg"
          alt="Livraison"
        />
      </div>
      <div class="annonce-content">
        <strong>Lorem ipsum dolor sit.</strong>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          deserunt iste quo laudantium corporis neque, rem alias quam incidunt
          laborum unde a nobis quisquam omnis in quos architecto eos itaque?
        </p>
      </div>
    </div>
    <div class="annonce-box">
      <div class="annonce-icon">
        <img
          src="../../assets/handshake.svg"
          alt="Bonne affaire"
        />
      </div>
      <div class="annonce-content">
        <strong>Lorem ipsum dolor sit.</strong>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eligendi
          deserunt iste quo laudantium corporis neque, rem alias quam incidunt
          laborum unde a nobis quisquam omnis in quos architecto eos itaque?
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Description",
};
</script>

<style scoped>
.search-annonce {
  display: flex;
  flex-flow: column nowrap;
}

/* Bloc de Annonce */
.annonce-box {
  display: flex;
  align-items: center;
  margin-top: 15px;
}

.annonce-box .annonce-icon {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #edf0f1;
  height: 80px;
  width: 100px;
  border-radius: 50%;
  overflow: hidden;
  text-align: center;
  margin-right: 15px;
}

.annonce-box .annonce-icon img {
  width: 50%;
  vertical-align: middle;
  border-style: none;
}

.annonce-box .annonce-content p {
  width: 70%;
}
</style>