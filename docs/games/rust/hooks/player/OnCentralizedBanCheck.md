---
hide_table_of_contents: true
---

# OnCentralizedBanCheck

## Usage

* Called when a player is about to be checked in the centralized ban database
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnCentralizedBanCheck(Network.Connection connection)
{
    Puts("OnCentralizedBanCheck works!");
    return null;
}
```
