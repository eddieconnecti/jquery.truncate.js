# jquery.truncate.js
Truncate Plugin for the jQuery JavaScript Library

## Installation

Include the script *after* the jQuery library

```html
<script src="/path/to/jquery.truncate.js"></script>
```

## Usage

Initialize the plugin and put the code inside the jQuery document.ready callback like here:

```html
<!-- Truncated list example -->
<ul class="list-inline list-truncated">
  <li><strong>1.</strong> List Item<li><strong>2.</strong> List Item<li><strong>3.</strong> List Item<li><strong>4.</strong> List Item<li><strong>5.</strong> List Item<li><strong>6.</strong> List Item<li><strong>7.</strong> List Item<li><strong>8.</strong> List Item<li><strong>9.</strong> List Item<li><strong>10.</strong> List Item<li><strong>11.</strong> List Item<li><strong>12.</strong> List Item<li><strong>13.</strong> List Item<li><strong>14.</strong> List Item<li><strong>15.</strong> List Item<li><strong>16.</strong> List Item<li><strong>17.</strong> List Item<li><strong>18.</strong> List Item<li><strong>19.</strong> List Item<li><strong>20.</strong> List Item<li><strong>21.</strong> List Item<li><strong>22.</strong> List Item<li><strong>23.</strong> List Item<li><strong>24.</strong> List Item<li><strong>25.</strong> List Item<li><strong>26.</strong> List Item<li><strong>27.</strong> List Item<li><strong>28.</strong> List Item<li><strong>29.</strong> List Item<li><strong>30.</strong> List Item<li><strong>31.</strong> List Item<li><strong>32.</strong> List Item<li><strong>33.</strong> List Item<li><strong>34.</strong> List Item<li><strong>35.</strong> List Item<li><strong>36.</strong> List Item<li><strong>37.</strong> List Item<li><strong>38.</strong> List Item<li><strong>39.</strong> List Item<li><strong>40.</strong> List Item<li><strong>41.</strong> List Item<li><strong>42.</strong> List Item<li><strong>43.</strong> List Item<li><strong>44.</strong> List Item<li><strong>45.</strong> List Item<li><strong>46.</strong> List Item<li><strong>47.</strong> List Item<li><strong>48.</strong> List Item<li><strong>49.</strong> List Item<li><strong>50.</strong> List Item<li><strong>51.</strong> List Item<li><strong>52.</strong> List Item<li><strong>53.</strong> List Item<li><strong>54.</strong> List Item<li><strong>55.</strong> List Item<li><strong>56.</strong> List Item<li><strong>57.</strong> List Item<li><strong>58.</strong> List Item<li><strong>59.</strong> List Item<li><strong>60.</strong> List Item<li><strong>61.</strong> List Item<li><strong>62.</strong> List Item<li><strong>63.</strong> List Item<li><strong>64.</strong> List Item<li><strong>65.</strong> List Item<li><strong>66.</strong> List Item<li><strong>67.</strong> List Item<li><strong>68.</strong> List Item<li><strong>69.</strong> List Item<li><strong>70.</strong> List Item<li><strong>71.</strong> List Item<li><strong>72.</strong> List Item<li><strong>73.</strong> List Item<li><strong>74.</strong> List Item<li><strong>75.</strong> List Item<li><strong>76.</strong> List Item<li><strong>77.</strong> List Item<li><strong>78.</strong> List Item<li><strong>79.</strong> List Item<li><strong>80.</strong> List Item<li><strong>81.</strong> List Item<li><strong>82.</strong> List Item<li><strong>83.</strong> List Item<li><strong>84.</strong> List Item<li><strong>85.</strong> List Item<li><strong>86.</strong> List Item<li><strong>87.</strong> List Item<li><strong>88.</strong> List Item<li><strong>89.</strong> List Item<li><strong>90.</strong> List Item<li><strong>91.</strong> List Item<li><strong>92.</strong> List Item<li><strong>93.</strong> List Item<li><strong>94.</strong> List Item<li><strong>95.</strong> List Item<li><strong>96.</strong> List Item<li><strong>97.</strong> List Item<li><strong>98.</strong> List Item<li><strong>99.</strong> List Item<li><strong>100.</strong> List Item
</ul>

<!-- Truncated text example -->
<p class="string-truncated"><span>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.</span></p>
```

```javascript
$(function(){        
    $('ul.list-truncated').truncate({
        max: 15,
        collapsed: true,
        toggleBtnTitle: function(collapsed, total, max) 
        {
          return collapsed ? 
            '<span class="glyphicon glyphicon-chevron-down" aria-hidden="true"></span> '+(total-max)+' more...' 
            :
            '<span class="glyphicon glyphicon-chevron-up" aria-hidden="true"></span> hide '+(total-max);
        }
    });
    
    $('p.string-truncated').truncate({
        max: 60,
        collapsed: true,
        toggleBtnTitle: function(collapsed, total, max) 
        {
          return collapsed ? 
            '(...)' 
            :
            '(less)';
        }
    });
});
```

## Requires

- [jQuery 1.11.2](https://jquery.com/)

## Authors

[K. Feldmaier](https://github.com/eddieconnecti)
