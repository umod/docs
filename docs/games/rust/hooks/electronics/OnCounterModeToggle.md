---
hide_table_of_contents: true
---

# OnContainerDropItems

## Usage

* Called when a player ties to toggle a power counter between modes
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnCounterModeToggle(PowerCounter counter, BasePlayer player, bool mode)
{
    Puts("OnCounterModeToggle works!");
    return null;
}
```
