const superagent = require('superagent');
const cheerio = require('cheerio');
const url = require('url');
var charset = require("superagent-charset");
charset(superagent); //设置字符 解决中文乱码问题

urlString = 'http://www.chinaunicombidding.cn/jsp/cnceb/web/info1/infoList_all.jsp?notice=&time1=&time2=&province=&city';
superagent.get(urlString)
        .charset('gbk')
        .set('Content-Type', 'text/html; charset=GBK')
        .set('Accept-Encoding', 'gzip, deflate,utf-8')
        .set('Accept-Language', 'zh-CN,zh;q=0.9')
        .set('Cookie', ' FSSBBIl1UgzbN7N7006S=.sA8ZIwRXpfjxNh6JJ19BBp.baX9M5XS9.UsShbwicKXRkuBIBE8ynxOg2pLcmpD; BIGipServerpool_anquanfanghu=801252228.24091.0000; PURWW_SESSIONID=uU74N9rf70cXSjbhoe_7kzugg6FihLzl17ZQUkqjyKEj5EdbdaN-!1703594139; FSSBBIl1UgzbN7N7006T=3ngFAUFacYUf5ZMZy2etT_a.s2ha6qnCIUEkB3.a36tnt3NeG1v4AYHM_M8rGgNgMZhCfXbmXXg5a3cqLPN5M0nyV4MQFsV5kd0POcoar4FO7qYvEWuYE3ba2uV5CzVo..5ZMHuybs9sixqZYEshN9zz6YxOTkqrBFpK.hpIGCqmzt8ahJKtyyJJU2sqt2Y.wndZITIwovi_Zq4DHLORMSS7lk1WwDuAjznKPDkVpWkARNlG55MGrHOB.kphmWXMCvJ2zr5ka5wcnhzYWNZJeeUrgpwpYtUfWFv6Prxx4jCAbb.4TTGeE2g0FmTwTOSwApxV')
        .end((err,res) => {
            if(err) {
                return console.log(error);
            }        
            let $ = cheerio.load(res.text);            
            $('.td_botton_line').each((idx,elem) => {                            
                    var province = elem.attribs.title;
                    if(province){
                        console.log("province====",province);               
                    }                                    
            })
        })    
