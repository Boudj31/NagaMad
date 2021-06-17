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
        <h4 class="lilTitle">Lorem ipsum dolor sit.</h4>
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
        <h4 class="lilTitle">Lorem ipsum dolor sit.</h4>
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
        <h4 class="lilTitle">Lorem ipsum dolor sit.</h4>
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
  flex-flow: row nowrap;
}

/* Bloc de Annonce */
.annonce-box {
  display: flex;
  flex-flow: column nowrap;
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
  height: auto;
  vertical-align: middle;
  border-style: none;
}

.annonce-box .annonce-content p {
  max-width: 70%;
  margin: auto;
  color: var(--white-hf);
}

.lilTitle {
  width: 70%;
  text-align: center;
  margin: 3% auto;
}

.annonce-box{
  background-color: rgba(0,0,0,0.6);
  padding: 5% 0;
}

.annonce-box:first-child{
  border-radius: 200px 0 0 200px;
}

.annonce-box:last-child{
  border-radius: 0 200px 200px 0;
}

@media (max-width: 727px){

  .search-annonce {
    flex-flow: row wrap;
  }

  .annonce-box,
  .annonce-box:first-child,
  .annonce-box:last-child{
    border-radius: 200px;
  }

}

</style>