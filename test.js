

$(document).ready(function() {

//eth wallet
  var web3 = new Web3();
      var global_keystore;

if (typeof userid == undefined){

throw new Error("no user");

}

//check if user have wallet, if not create.

$.get( "./api.php?checketh="+userid, function( data ) {
//console.log(data);

if (data == "no seed"){

newWallet();



}else{
//load wallet from seed
setSeed(data);

}

});


function scrooly(item){
   $('html, body').animate({
        scrollTop: $(item).offset().top
    }, 1000);
    }


//open send
 $('#sendethbut').click(function(){
$("#resultsendeth").html('');
       $("#sendethform").show().fadeIn();
        $("#confethbut").show();

   $('#ethwalletsend').modal('show');
 

});

//show all wallets
 $('#showall').click(function(){
//set default 'col-lg-12'
 
  $('#ethcard').removeClass().addClass('col-lg-4').fadeIn().show();
  $('#btccard').removeClass().addClass('col-lg-4').fadeIn().show();
  $('#yoccard').removeClass().addClass('col-lg-4').fadeIn().show();
    
  
   $('html, body').animate({scrollTop: '0px'}, 1000);
  
$("#txcard").fadeOut().hide();
    $("#showallw").fadeOut().addClass("hide");


});
//show eth tx
 $('#showethtx').click(function(){

$.get( "./api.php?tx=eth&account="+$("#ethaddress").val(), function( data ) {

   $("#txcard").html(data);  
});


       $("#txcard").show().fadeIn();
       $("#showallw").removeClass().fadeIn();
//set default 'col-lg-12'
  $('#ethcard').removeClass().addClass('col-lg-12');
  $('#btccard').removeClass().fadeOut().hide();
  $('#yoccard').removeClass().fadeOut().hide();

    setTimeout(scrooly("#txcard"), 1000);


});



 //open get
 $('#getethbut').click(function(){

  


   $('#ethwalletdeposit').modal('show');
 

});


  //send eth
 $('#confethbut').click(function(){


  sendEth();
 

});



function setWeb3Provider(keystore) {
        var web3Provider = new HookedWeb3Provider({
         // host: "https://ropsten.infura.io/TyxJlxWh5eZFQklXQAmC",
       host: "https://mainnet.infura.io/TyxJlxWh5eZFQklXQAmC",
          transaction_signer: keystore
        });

        web3.setProvider(web3Provider);
      }

 function newAddresses(password) {
        
   var password = "moulokbouk";

        var numAddr = 1

        lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {

        global_keystore.generateNewAddress(pwDerivedKey, numAddr);

        var addresses = global_keystore.getAddresses();

       
        for (var i=0; i<1; ++i) {
         // $("#ethaddress").val(addresses[i]);
$("#ethaddress").val("0x" + addresses[i]);

 $.get( "./api.php?qrcode="+("0x" + addresses[i]), function( data ) {
$("#ethqrcode").html(data);
     
});


           }



        getBalances();
      })
      }




          function getBalances() {
            $(".ethctrl").prop('disabled');
        var add = $("#ethaddress").val();
        var newaddresses = [];
       newaddresses.push(add); 




nonceses = [];

data = "";

        async.map(newaddresses, web3.eth.getBalance, function(err, balances) {
          async.map(newaddresses, web3.eth.getTransactionCount, function(err, nonces) {
          
            for (var i=0; i<1; ++i) {
            //  data += '<div>' + newaddresses[i] + ' (Bal: ' + (balances[i] / 1.0e18) + ' ETH, Nonce: ' + nonces[i] + ')' + '</div>'
$(".ethbalance").val((balances[i] / 1.0e18).toFixed(8));
//$("#ethsendValueAmount").val((balances[i] / 1.0e18).toFixed(8));
$("#firstethbalance").fadeOut().html((balances[i] / 1.0e18).toFixed(8)).fadeIn();
nonceses.push(nonces[i]); 


            }
           // console.log(data);
          })
        })
$(".ethctrl").removeAttr('disabled');




      }

      function setSeed(seed) {
        //var password = prompt('Enter Password to encrypt your seed', 'Password');
          var password = "moulokbouk";                                    
        lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {

        global_keystore = new lightwallet.keystore(
          seed, 
          pwDerivedKey);

        
        newAddresses(password);
        setWeb3Provider(global_keystore);
        
        //getBalances();
        })
      }



      function newWallet() {
        var extraEntropy = Math.random().toString(36);
      
        var randomSeed = lightwallet.keystore.generateRandomSeed(extraEntropy);

       var password = "moulokbouk";

        lightwallet.keystore.deriveKeyFromPassword(password, function(err, pwDerivedKey) {

        global_keystore = new lightwallet.keystore(
          randomSeed,
          pwDerivedKey);

        //save seed


$.ajax({
    type: 'POST',
   
    url: './api.php',
    data: { 
        'createseed': randomSeed
       
    },
    success: function(){
 setSeed(randomSeed);
    }
});


                
       
        })
      }





function sendEth() {
    $("#resultsendeth").html('');

        var fromAddr = document.getElementById('ethaddress').value
        var toAddr = document.getElementById('ethsendTo').value
        var valueEth = document.getElementById('ethsendValueAmount').value
        var value = parseFloat(valueEth)*1.0e18
        var gasPrice = document.getElementById('ethgazprice').value
        var gas = document.getElementById('ethgaz').value
        var nonceis = nonceses[0]
        console.log("nonce: "+nonceis);
        var nonceis = nonceis+1
        console.log("new nonce: "+nonceis);

        $("#sendethform").fadeOut("slow").hide();
         $("#confethbut").hide();

        web3.eth.sendTransaction({from: fromAddr, to: toAddr, value: value, gasPrice: gasPrice, gas: gas, nonce: nonceis}, function (err, txhash) {
          console.log('error: ' + err)
          console.log('txhash: ' + txhash)

if(err != null){
  $("#resultsendeth").html('<div class="alert alert-danger alert-rounded">' + err + '<button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button></div>');
 getBalances();
}else{

     $("#resultsendeth").html('<div class="alert alert-success alert-rounded"><a href="http://etherscan.io/tx/'+ txhash +'" target="_blank">Transaction</a> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button></div>');
  //$("#resultsendeth").html('<div class="alert alert-success alert-rounded"> Transaction: <a href="http://mainnet.etherscan.io/tx/'+ txhash +'" target="_blank">' + txhash + ' </a> <button type="button" class="close" data-dismiss="alert" aria-label="Close"> <span aria-hidden="true">×</span> </button></div>');
 

 getBalances();
}
              })
      }
window.setInterval(function(){
  /// call your function here
  getBalances();
}, 30000);
});
