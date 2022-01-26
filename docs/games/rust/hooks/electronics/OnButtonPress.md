---
hide_table_of_contents: true
---

# OnButtonPress

## Usage

* Called when a player is trying to press a button
* Returning a non-null value cancels default behavior

## Examples

```csharp title=""
object OnButtonPress(PressButton button, BasePlayer player)
{
    Puts("OnButtonPress works!");
    return null;
}
```
