---
hide_table_of_contents: true
---

# OnRfListenerAdded

## Usage

* Called right after an object has started listening to an RF frequency
* No return behavior

## Examples

```csharp title=""
void OnRfListenerAdded(IRFObject obj, int frequency)
{
    Puts("OnRfListenerAdded works!");
}
```
