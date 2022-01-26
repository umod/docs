---
hide_table_of_contents: true
---

# CanUseGesture

## Usage

* Called when a player attempts to use a gesture
* Returning true or false overrides default behavior

## Examples

```csharp title=""
bool? CanUseGesture(BasePlayer player, GestureConfig gesture)
{
    Puts("CanUseGesture works!");
    return null;
}
```
