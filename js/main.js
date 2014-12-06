function fetchFlipkartOfferData() {
    $.get( "http://www.flipkart.com/offers", function(data, status) {
        if(status == "success") {
            products = $(data).find(".productModule").find("a.product-unit");
            html = "<table class=\"table table-hover table-striped .table-bordered\"><tbody>";
            $.each(products, function() {
                html += "<tr><td>";
                html += "<a target=\"_blank\" href=\"http://www.flipkart.com"+ $(this).attr("href") +"\">";
                html += $(this).find("div.pu-offer").text();
                html += " >> ";
                html += $(this).find("div.pu-price").find("div.multiple").text();
                html += "</td></tr>"
            });
            html += "</tbody></table>";
            $("#content").html(html);
        }
    });
}
function main() {
    fetchFlipkartOfferData();
}
document.addEventListener('DOMContentLoaded', main);