import google.generativeai as genai
import json


def parse_json_tag(tag: str):
    splited = tag.split('\n')
    if len(splited) < 3:
        raise ValueError(tag)
    tags_str = ''.join(tag.split('\n')[1:-1])
    return json.loads(tags_str)


def get_tags(data):

    # 配置您的API密钥
    genai.configure(api_key="") # put your gemini api key here

    # 初始化模型，这里'gemini-1.5-flash'是示例模型名，您需要替换为实际可用的模型名
    model = genai.GenerativeModel('gemini-1.5-flash')

    tag_file_path = 'unique_tags.txt'

    # 读取标签文件
    with open(tag_file_path, 'r', encoding='utf-8') as file:
        tags = [line.strip() for line in file if line.strip()]

    urls = [i.url for i in data.history]

    # 准备生成标签的prompt，这里将用户浏览记录转换为字符串提供给模型
    # prompt = "Generate personality tags based on the following user's browsing history. And here're some requirements:\n" + "1. Each tag is less than 2 words.\n" + "2. the amount of tags is 50.\n" + "3. No need to give the explanation of the tags.\n" + "Following is the given urls" + "\n".join(urls)
    prompt = "Generate personality tags based on the following user's browsing history. And here're some requirements:\n" + "1. The tags should be chosen from the given tag list\n" + "2. No need to give the explanation of the tags.\n" + \
        "3. According to the relation between the urls and the tags, given a reliablity for each tag, the value is from 0 to 1, output it" + \
        "4. the amount of tags is 10, give the 10 tags that get the highest reliability\n" + \
        "Following is the given urls" + \
        "\n".join(urls) + "Following is the given tags" + "\n".join(tags)

    # 使用模型生成内容
    response = model.generate_content(prompt)

    # 打印生成的标签
    # print(response.text)

    return parse_json_tag(str(response.text))
