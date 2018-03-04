var active = '';

function tog(id) {
   /* don't do anything if we're clicking the already open window */
   if(active == id) { return; }

   /* animate */
   $( '#'.concat(active) ).slideUp();
   $( '#'.concat(id) ).slideDown();

   /* remember the active one */
   active = id;

   /* update the hash so back/forward arrows work */
   window.location.hash = '#'.concat(active);
}

$( document ).ready(function () {

   /* set to the first window */
   active = $( '.idea-content' ).first().attr('id');

   /* unless there's a hash, then use the hash */
   var hash = window.location.hash.substring(1);
   if(hash) {
      active = hash;
   }
   

   /* show the first window */
   $( '#'.concat(active) ).show();

   /* bind the click handler */
   $( '.idea-head' ).click(function () {
      var id = $(this).next('.idea-content').attr('id');
      tog(id);
   });
});
