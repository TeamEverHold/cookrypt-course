// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract TagBasedAds {
    address public platformOwner; // 平台维护者地址
    mapping(address => string[]) public userTags; // 用户地址映射到标签数组
    mapping(string => address[]) public tagUsers; // 标签映射到用户数组
    uint public feePerUser=1; // 每个用户信息的费用

    event TagRegistered(address indexed user, string tag);
    event UsersRequested(address indexed advertiser, string tag, uint usersCount);

    constructor() {
        platformOwner = msg.sender;
    }

    // 用户注册标签
    // 多对多映射（存到数组）
    function registerTag(string memory _tag) public {
        userTags[msg.sender].push(_tag);
        tagUsers[_tag].push(msg.sender);
        emit TagRegistered(msg.sender, _tag);
    }

    //广告商获取用户列表
    function requestUsersByTag(string memory _tag) public payable returns (address[] memory) {
        require(msg.value >= tagUsers[_tag].length * feePerUser, "Insufficient payment");
        uint usersCount = tagUsers[_tag].length;
        // 计算平台提成
        //uint platformFee = (msg.value * 10) / 100; // 假设平台提成10%
        uint platformFee = msg.value / 10; // 假设平台提成10%
        uint advertiserPayment = msg.value - platformFee; // 广告商支付给用户的费用

        // 分配给用户和平台的代币
        for (uint i = 0; i < usersCount; i++) {
            address user = tagUsers[_tag][i];
            uint userPayment = (advertiserPayment * 90) / 100 / usersCount; // 用户获得90%，平分
            (bool success, ) = user.call{value: userPayment}("");
            require(success, "Payment to user failed");
        }

        // 将平台提成转给平台维护者
        (bool platformSuccess, ) = platformOwner.call{value: platformFee}("");
        require(platformSuccess, "Payment to platform owner failed");

        emit UsersRequested(msg.sender, _tag, usersCount);

        return tagUsers[_tag];
    }
    //广告商获取用户列表并返回用户地址数组

    // 另一个函数，它接受一个地址数组并进行一些操作
    // 例如，打印出传入的每个地址
    function displayAddresses(address[] memory _addresses) public {
        for (uint i = 0; i < _addresses.length; i++) {
            address user = _addresses[i];
            // 这里只是简单打印地址，实际中可能进行更复杂的操作
            // 注意：实际开发中这里应该使用events来记录
            emit AddressDisplayed(tagUsers[_tag]);
        }
    }

    // 事件，用于记录地址显示操作
    event AddressDisplayed(address indexed tagUsers[_tag]);

    // 平台维护者可以更新每个用户信息的费用
    function setFeePerUser(uint _feePerUser) public {
        require(msg.sender == platformOwner, "Only platform owner can set fee");
        feePerUser = _feePerUser;
    }

    // 通过用户地址获取用户标签
    // 这个函数被标记为 view，意味着它不会修改合约状态，而只会读取数据，因此调用这个函数不需要消耗大量的 gas
    function getUserTagsByAddress(address _userAddress) public view returns (string[] memory) {
        return userTags[_userAddress];
    }

    function showAddress(address _userAddress) public view returns (string[] memory) {
        return userTags[_userAddress];
    }

    // 用于接收以太币的fallback函数
    fallback() external payable {}
}