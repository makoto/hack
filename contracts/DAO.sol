contract DAO {
	event Transfer(address addr, uint256 value);

	function (){
		Transfer(msg.sender, msg.value);
	}

	function splitDAO(address receiver, uint amount){
		Transfer(receiver, amount);
		receiver.send(amount);
	}
}
