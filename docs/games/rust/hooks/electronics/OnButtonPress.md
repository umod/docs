---
hide_table_of_contents: true
---

# OnButtonPress

## Usage

* Called when a player is trying to press a button
* Return a non-null value to override default behavior

## Examples

```csharp title=""
object OnButtonPress(PressButton button, BasePlayer player)
{
    Puts("OnButtonPress works!");
    return null;
}
```
