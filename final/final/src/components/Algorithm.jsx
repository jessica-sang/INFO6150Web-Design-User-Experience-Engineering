import Comment from './Comment'
import '../static/css/BlogDetail.css'
import binary from '../static/images/binary-search.png'
import merge from '../static/images/merge-sort.png'
import quick from '../static/images/quick-sort.png'

function AlgorithmLearningDetail({ darkModeClass, isLogin, user, loginFormRef }) {
    return (
        <div className={`blog-detail ${darkModeClass}`}>
            <div className={`detail-container ${darkModeClass}`}>
                <div className='detail-title' aria-label='Blog detail title'>
                Program Structure And Algorithms
                </div>
                <div className='detail-content' aria-label='Blog detail content'>
                    <dl>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                            Here introduce few sorting  algorithms and data structures.
                            
                            </blockquote>
                        </dd>
                        <dd>Big O efficiency:
                            <br></br><br></br>
                            Indexing:    Linear array: O(1),    Dynamic array: O(1)
                            <br></br><br></br>
                            Search:     Linear array: O(n),     Dynamic array: O(n)
                            <br></br><br></br>
                            Optimized Search: Linear array: O(log n), Dynamic array: O(log n)
                            <br></br><br></br>
                            Insertion: Linear array: n/a Dynamic array: O(n)
                        </dd>
                        <br></br>
                        <dt><strong> Binary Search </strong></dt>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                            Binary search is an efficient algorithm for finding an item from a sorted list of items.
                            It works by repeatedly dividing in half the portion of the list that could contain the item, 
                            until you've narrowed down the possible locations to just one. 
                            </blockquote>
                        </dd>
                        <br></br>
                        <img className='detail-img' src={binary} alt="binary_search" />
                        <br></br><br></br>
                        <dd>Here's a step-by-step description of using binary search to find 9 in this list:
                            <br></br><br></br>
                            1. Find the middle point of the list. Since the length of the list is 10, the middle index is 5.
                            <br></br><br></br>
                            2. Compare the item in the middle of the list to the item we're looking for.
                            <br></br><br></br>
                            3. Since 5 is not the item we're looking for, we need to continue our search in the upper half of the list.
                            <br></br><br></br>
                            4. Find the middle point of the upper half of the list. Since the upper half of the list has a length of 6, the middle index is 7.
                            <br></br><br></br>
                            5. Compare the item in the middle of the list to the item we're looking for. Since 7 is lesser than 9, we continue our search in the upper half of the list.
                            <br></br><br></br>
                            6. Find the middle point of the upper half of the list. Since the upper half of the list has a length of 4, the middle index is 9.
                            <br></br><br></br>
                            7. Compare the item in the middle of the list to the item we're looking for. Since 9 is the item we're looking for, we're done!
                        </dd>
                        <br></br>
                        <dt><strong> Merge Sort </strong></dt>
                        <dd>    
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                            Merge sort is a sorting technique based on divide and conquer technique.
                            With worst-case time complexity being Ο(n log n), it is one of the most respected algorithms.
                            Merge sort first divides the array into equal halves and then combines them in a sorted manner.
                            </blockquote>
                        </dd>
                        <br></br>
                        <img className='detail-img' src={merge} alt="merge_search" />
                        <br></br><br></br>
                        <dd>Here's a step-by-step description of using merge sort to sort the list:
                            <br></br><br></br>
                            1. Divide the unsorted list into n sublists, each containing one element (a list of one element is considered sorted).
                            <br></br><br></br>
                            2. Repeatedly merge sublists to produce new sorted sublists until there is only one sublist remaining. This will be the sorted list.
                        </dd>
                        <br></br>
                        <dt><strong> Quick Sort </strong></dt>
                        <dd>
                            <blockquote className={`detail-blockquote detail-shadow ${darkModeClass}`}>
                            Quick sort is a highly efficient sorting algorithm and is based on partitioning of array of data into smaller arrays.
                            A large array is partitioned into two arrays one of which holds values smaller than the specified value, say pivot,
                            based on which the partition is made and another array holds values greater than the pivot value.
                            </blockquote>
                        </dd>
                        <br></br>
                        <img className='detail-img' src={quick} alt="quick_search" />
                        <br></br><br></br>
                        <dd>Here's a step-by-step description of using quick sort to sort the list:
                            <br></br><br></br>
                            1. Choose an element, called pivot, from the list. Generally pivot can be the middle index element.
                            <br></br><br></br>
                            2. Reorder the list so that all elements with values less than the pivot come before the pivot, while all elements with values greater than the pivot come after it (equal values can go either way).
                            <br></br><br></br>
                            3. After this partitioning, the pivot is in its final position. This is called the partition operation.
                            <br></br><br></br>
                            4. Recursively apply the above steps to the sub-list of elements with smaller values and separately the sub-list of elements with greater values.
                        </dd>
                        <br></br>

                    </dl>
                </div>
                <br></br><br></br>
            </div>
            <Comment darkModeClass={darkModeClass} isLogin={isLogin} user={user} loginFormRef={loginFormRef} ></Comment>
        </div>
    );
}

export default AlgorithmLearningDetail;