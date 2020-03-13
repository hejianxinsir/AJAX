
console.log('我是test.js')

getCss.onclick = () => {
	const request = new XMLHttpRequest()
	request.open('GET', '/test.css')
	request.onload = () => {
		console.log('request.response')
		console.log(request.response)
	 	// 上面打印出请求的响应内容。下面把响应内容放到 style 中
		// 再把 style append 到 body 里面就能让 css 生效了。
		const style = document.createElement('style')
		style.innerText = request.response
		document.body.appendChild(style)
	}
	request.onerror = () => {
		console.log('失败了')
	}
	request.send()
}

getname.onclick = () => {
	let request = new XMLHttpRequest()
	request.open('GET','/name.css')
	request.onload = () => {
		const style = document.createElement('style')
		style.innerText = request.response
		document.body.appendChild(style)
	}
	request.onerror = () => {console.log('失败了')}
	request.send()
}

get1js.onclick = () => {
	let request = new XMLHttpRequest()
	request.open('GET','/1.js')
	request.onload = () => {
		console.log('获取1.js成功了')
		const script = document.createElement('script')
		script.innerHTML = request.response
		document.body.appendChild(script)
	}
	request.onerror = () => {
		console.log('获取1.js失败了')
	}
	request.send()
}

onehtml.onclick = () => {
	console.log('1')
	let req = new XMLHttpRequest()
	console.log(req)
	req.open('GET','/1.html')
	req.onreadystatechange = () => {
		if(req.readyState === 4){
			console.log('4')
			if(req.status >= 200 && req.status <=300){
				console.log('onhtml 成功')
				const div = document.createElement('div')
				div.innerHTML = req.response
				document.body.appendChild(div)
			}else{
				console.log('onhtml失败')
			}
		}
	}
	req.send()
}

getxml.onclick = () => {
	let request = new XMLHttpRequest()
	request.open('GET', '/1.xml')
	request.onreadystatechange = () => {
		if(request.readyState === 4){
			if(request.status>= 200 && request.status<= 300){
				let dom = request.responseXML
				const text = dom.getElementsByTagName('warning')[0].textContent
				console.log(text.trim())

			}else{
				console.log('getxml 失败')
			}
		}
	}
	request.send()
}

let n = 1
getNextPage.onclick = () => {
	let request = new XMLHttpRequest()
	request.open('GET', `/page${n+1}.json`)
	request.onreadystatechange = () => {
		if(request.readyState === 4 && request.status === 200){
			console.log('page2.json 获取成功')
			const array = JSON.parse(request.response)
			array.forEach(item => {
				const li = document.createElement('li')
				li.textContent = item.id
				xxx.appendChild(li)
			})
			n+=1
		}	
	}
	request.send()
}
