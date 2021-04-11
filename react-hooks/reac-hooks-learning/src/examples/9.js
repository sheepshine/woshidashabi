var ip_str = '47.56.144.122 47.244.217.78 103.39.18.163 103.39.18.164 103.39.18.168 103.39.18.169 103.39.18.175 103.39.18.179 103.39.18.180 103.39.18.182 103.39.18.183 103.39.18.185 103.39.18.187 103.39.18.188 103.39.18.189 103.39.18.190 103.254.75.240 124.70.135.155 154.222.31.213 218.253.251.102  47.91.237.42 47.91.237.42 103.96.151.147';
var iplist_id = document.getElementById("host_iplist_id");
addSelElement( ip_str, iplist_id);
function addSelElement(str, target) {
 const arr = str.split(" ");
 for (let i = 0; i < arr.length; i++) {
  const option = document.createElement("option");
    option.value = arr[i];  
    option.innerHTML = arr[i];  
    target.appendChild(option);  
 }
}