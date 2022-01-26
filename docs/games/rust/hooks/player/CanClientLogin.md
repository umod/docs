---
hide_table_of_contents: true
---

# CanClientLogin

## Usage

* Called when the player is attempting to login
* Returning a string will use the string as the error message
* Returning true allows the connection, returning nothing will by default allow the connection, returning anything else will reject it with an error message

## Examples

```csharp title=""
bool CanClientLogin(Network.Connection connection)
{
    Puts("CanClientLogin works!");
    return true;
}
```
