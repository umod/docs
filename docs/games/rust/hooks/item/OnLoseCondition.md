---
hide_table_of_contents: true
---

# OnLoseCondition

## Usage

* Called right before the condition of the item is modified
* No Return behavior

## Examples

```csharp title=""
void OnLoseCondition(Item item, ref float amount)
{
    Puts("OnLoseCondition works!");
}
```
