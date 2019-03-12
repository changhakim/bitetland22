package com.bit_etland.web.proxy;

import javax.servlet.http.HttpServletRequest;






public class Pagination implements Proxy{
	private int pageNum,pageSize,blockSize,
				   startRow,endRow,startpage,endpage,
				   prevBlock,nextBlock,totalCount;
	private boolean existPrev,existNext;
	 
	public int getPageNum() {
		return pageNum;
	}

	public void setPageNum(int pageNum) {
		this.pageNum = pageNum;
	}

	public int getPageSize() {
		return pageSize;
	}

	public void setPageSize(int pageSize) {
		this.pageSize = pageSize;
	}

	public int getBlockSize() {
		return blockSize;
	}

	public void setBlockSize(int blockSize) {
		this.blockSize = blockSize;
	}

	public int getStartRow() {
		return startRow;
	}

	public void setStartRow(int startRow) {
		this.startRow = startRow;
	}

	public int getEndRow() {
		return endRow;
	}

	public void setEndRow(int endRow) {
		this.endRow = endRow;
	}

	public int getStartpage() {
		return startpage;
	}

	public void setStartpage(int startpage) {
		this.startpage = startpage;
	}

	public int getEndpage() {
		return endpage;
	}

	public void setEndpage(int endpage) {
		this.endpage = endpage;
	}

	public int getPrevBlock() {
		return prevBlock;
	}

	public void setPrevBlock(int prevBlock) {
		this.prevBlock = prevBlock;
	}

	public int getNextBlock() {
		return nextBlock;
	}

	public void setNextBlock(int nextBlock) {
		this.nextBlock = nextBlock;
	}

	public int getTotalCount() {
		return totalCount;
	}

	public void setTotalCount(int totalCount) {
		this.totalCount = totalCount;
	}

	public boolean isExistPrev() {
		return existPrev;
	}

	public void setExistPrev(boolean existPrev) {
		this.existPrev = existPrev;
	}

	public boolean isExistNext() {
		return existNext;
	}

	public void setExistNext(boolean existNext) {
		this.existNext = existNext;
	}

	@Override
	public void carryOut(Object o) {
		HttpServletRequest requst = (HttpServletRequest)o;
		System.out.println("cmd"+requst.getParameter("cmd"));
		System.out.println("페이지네이션 페이지"+requst.getParameter("page"));
		this.pageNum =(requst.getParameter("page_num")==null)?1:Integer.parseInt(requst.getParameter("page_num"));
		this.pageSize =(requst.getParameter("page_size")==null)?5:Integer.parseInt(requst.getParameter("page_size"));
		/*
		 * switch (Action.valueOf(requst.getParameter("cmd").toUpperCase())) {
		 * 
		 * case CUST_LIST:case ACCESS: this.totalCount =
		 * Integer.parseInt(CustomerServiceImpl.getInstance().countCustomers(null));
		 * break; case PRODUCT_LIST:case PRODUCT_REGISTER:case PRODUCT_DELETE:case
		 * PRODUCT_UPDATE: this.totalCount =
		 * ProductServiceImpl.getInstance().countProducts(null); break; case
		 * CATEGORY_LIST: this.totalCount =
		 * CategoryServiceImpl.getInstance().countCategories(null); break; default:
		 * break; }
		 */
		
		
		System.out.println("총갯수"+totalCount);
		
		
		
		
		/*this.startRow = totalCount-((pageSize*pageNum)-1);
		if(startRow<=0) {
			int a = totalCount % pageSize;
			startRow = 1;
		}*/
		/*this.endRow = (totalCount-((pageSize*pageNum))+pageSize);*/
		int pageCount = totalCount/pageSize;
		if(totalCount%pageSize!=0) {
			pageCount++;
		}
		this.startRow = pageSize*(pageNum-1)+1;
		this.endRow = pageNum * pageSize;
		endRow = (totalCount > endRow)?endRow:totalCount;
		this.blockSize =(requst.getParameter("blocksize")==null)?5:Integer.parseInt(requst.getParameter("blocksize"));
		
		
		this.existPrev = (pageNum<=blockSize)?false:true;
		
		startpage = ((pageNum-1)/blockSize)*blockSize+1;
		this.existNext = (startpage+pageSize)>=pageCount?false:true;
		endpage = startpage + 4;
		if(endpage>pageCount) {
			endpage = pageCount;
		
		}
		prevBlock = startpage - pageSize;
		nextBlock = startpage + pageSize;
		
	}
	}

